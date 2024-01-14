include ActionView::Helpers::AssetUrlHelper
puts "🌱 Seeding..."

# Item.create(name: "Test name 1", 
#   price: 1, 
#   description: "Sample description 1", 
#   image_url: image_path("/Users/victorturitzin/Library/Mobile Documents/com~apple~CloudDocs/Web-Template/web-template/client/src/images/Test_Image_1.jpeg")
# ).image.attach(io: File.open("client/src/images/Test_Image_1.jpeg"), filename: "Test_Image_1.jpeg")

itemOne = Item.create(
  name: "Test Name 1",
  price: 1,
  description: "Sample description 1"
)

itemOne.image_url.attach(
  io: File.open(Rails.root.join("client/src/images/Test_Image_1.jpeg")),
  filename: "Test_Image_1.jpeg"
)

itemOne.save!

# Item.create(name: "Test name 2", price: 2, description: "Sample description 2")
#   .image.attach(io: File.open("client/src/images/Test_Image_2.jpeg"), filename: "Test_Image_2.jpeg")

puts "✅ Done seeding!"