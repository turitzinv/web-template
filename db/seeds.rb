include ActionView::Helpers::AssetUrlHelper
puts "🌱 Seeding..."

Item.create(name: "Test name 1", 
  price: 1, 
  description: "Sample description 1", 
  image_url: image_path("Test_Image_1.jpeg")
)

Item.create(name: "Test name 2", 
  price: 2, 
  description: "Sample description 2", 
  image_url: image_path("Test_Image_2.jpeg")
)

puts "✅ Done seeding!"