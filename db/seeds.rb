include ActionView::Helpers::AssetUrlHelper
puts "🌱 Seeding..."

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


itemTwo = Item.create(
  name: "Test Name 2",
  price: 2,
  description: "Sample description 2"
)

itemTwo.image_url.attach(
  io: File.open(Rails.root.join("client/src/images/Test_Image_2.jpeg")),
  filename: "Test_Image_2.jpeg"
)

itemTwo.save!

puts "✅ Done seeding!"