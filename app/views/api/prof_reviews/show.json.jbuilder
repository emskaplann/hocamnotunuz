json.extract! @prof_review, :id, :body, :klass, :grade, :quality, :difficulty, :take_again, :for_credit, :txt_book, :attendance, :tag1, :tag2, :tag3, :prof_id
json.updatedOn @prof_review.updated_at.strftime("%a, %d %b %Y")

if @prof_review.likes.length != 0
    json.likes do
        @prof_review.likes.each do |like|
            json.set! like.id do
                json.extract! like, :id, :like_type, :liker_id, :review_id
            end
        end
    end
else
    json.likes ({})
end