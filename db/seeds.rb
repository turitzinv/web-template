include ActionView::Helpers::AssetUrlHelper
puts "🌱 Seeding..."

Item.create(name: "Test name", price: 1, description: "Sample description", image_url: image_path("Test_Image_1.jpeg"))

puts "✅ Done seeding!"