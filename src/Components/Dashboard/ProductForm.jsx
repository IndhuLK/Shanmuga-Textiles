import { useState, useRef } from "react";
import { Plus, X, Upload, Trash2 } from "lucide-react";
import { Button } from "/src/Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Label } from "../../Components/ui/label";
import { Textarea } from "../../Components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../Components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/ui/card";
import { Badge } from "../../Components/ui/badge";

const ProductForm = ({
  initialData = {},
  onSubmit,
  onCancel,
  isEditing = false,
}) => {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    description: initialData.description || "",
    price: initialData.price || 0,
    originalPrice: initialData.originalPrice || 0,
    category: initialData.category || "",
    status: initialData.status || "draft",
    images: initialData.images || [],
    specifications: initialData.specifications || {},
  });

  const [newSpecKey, setNewSpecKey] = useState("");
  const [newSpecValue, setNewSpecValue] = useState("");

  const categories = [
    "Electronics",
    "Clothing",
    "Home & Garden",
    "Sports",
    "Books",
    "Toys",
    "Beauty",
    "Automotive",
    "Food",
    "Other",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const addSpecification = () => {
    if (newSpecKey && newSpecValue) {
      setFormData((prev) => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [newSpecKey]: newSpecValue,
        },
      }));
      setNewSpecKey("");
      setNewSpecValue("");
    }
  };

  const removeSpecification = (key) => {
    setFormData((prev) => ({
      ...prev,
      specifications: Object.fromEntries(
        Object.entries(prev.specifications).filter(([k]) => k !== key)
      ),
    }));
  };

  
  const handleAddProduct = (data) => {
    const newProduct = {
      ...data,
      id: Date.now().toString(),
      rating: 0,
      sales: 0,
      stitching: data.stitching || "No", // default to "No"
      image:
        data.images && data.images.length > 0
          ? data.images[0]
          : "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=400&fit=crop",
    };

    setProducts((prev) => [newProduct, ...prev]);
    setShowForm(false);
    toast({
      title: "Product Added",
      description: "New product has been successfully added.",
    });
    filterProducts();
  };

  const handleEditProduct = (data) => {
    if (!editingProduct) return;

    const updatedProduct = {
      ...editingProduct,
      ...data,
      stitching: data.stitching || editingProduct.stitching,
      image:
        data.images && data.images.length > 0
          ? data.images[0]
          : editingProduct.image,
    };

    setProducts((prev) =>
      prev.map((p) => (p.id === editingProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
    setShowForm(false);
    toast({
      title: "Product Updated",
      description: "Product has been successfully updated.",
    });
    filterProducts();
  };

  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    const imageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setFormData({
      ...formData,
      images: [...formData.images, ...imageUrls],
    });
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>
            {isEditing ? "Edit Product" : "Add New Product"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Product Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="Enter product title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, category: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-white ">
                      {categories.map((category) => (
                        <SelectItem
                          key={category}
                          value={category}
                          className=" hover:bg-green-500"
                        >
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select
                    className="bg-white"
                    value={formData.status}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, status: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white ">
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="price">Price (₹)</Label>
                  <Input
                    id="price"
                    type="number"
                    step="1"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        price: parseFloat(e.target.value) || 0,
                      }))
                    }
                    placeholder="0.00"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="originalPrice">Original Price (₹)</Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    step="1"
                    value={formData.originalPrice}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        originalPrice: parseFloat(e.target.value) || 0,
                      }))
                    }
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Enter product description"
                rows={4}
                required
              />
            </div>

            {/* Images */}
            <div>
              <Label>Product Images</Label>
              <div className="space-y-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleUploadClick}
                  className="w-full h-32 border-dashed border-2 hover:border-primary"
                >
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                    <span className="text-muted-foreground">
                      Click to add image
                    </span>
                  </div>
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  multiple
                  className="hidden"
                />
              </div>
            </div>

            {/* Specifications */}
            <div>
              <Label>Specifications</Label>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Specification name"
                    value={newSpecKey}
                    onChange={(e) => setNewSpecKey(e.target.value)}
                  />
                  <Input
                    placeholder="Specification value"
                    value={newSpecValue}
                    onChange={(e) => setNewSpecValue(e.target.value)}
                  />
                  <Button type="button" onClick={addSpecification} size="icon">
                    <Plus className="h-4 w-4 bg-green-500" />
                  </Button>
                </div>

                {Object.entries(formData.specifications).length > 0 && (
                  <div className="space-y-2">
                    {Object.entries(formData.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex items-center justify-between p-3 bg-muted rounded"
                        >
                          <div>
                            <span className="font-medium">{key}:</span> {value}
                          </div>
                          <Button
                            type="button"
                            size="icon"
                            variant="ghost"
                            onClick={() => removeSpecification(key)}
                            className="h-6 w-6"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            {/*Stitching */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Stitching Available?
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="stitching"
                    value="Yes"
                    checked={formData.stitching === "Yes"}
                    onChange={(e) =>
                      setFormData({ ...formData, stitching: e.target.value })
                    }
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="stitching"
                    value="No"
                    checked={formData.stitching === "No"}
                    onChange={(e) =>
                      setFormData({ ...formData, stitching: e.target.value })
                    }
                  />
                  No
                </label>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-4 pt-6">
              <Button
                type="submit"
                className="flex-1 bg-green-500 cursor-pointer"
              >
                {isEditing ? "Update Product" : "Create Product"}
              </Button>
              <Button
                type="button"
                variant="outline-none"
                onClick={onCancel}
                className="flex-1  cursor-pointer bg-green-500 hover:bg-green-600"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductForm;
