class ItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :price, :description, :image_url

  def image_url
    rails_blob_path(object.image_url, only_path: true) if object.image_url.attached?
  end
end
