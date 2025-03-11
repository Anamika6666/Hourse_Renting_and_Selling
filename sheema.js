const joi = require('joi')
module.exports.schema=joi.object({
    listing:joi.object({
        title:joi.string().required(),
        description:joi.string().required(),
        price:joi.number().required().min(0),
        location:joi.string().required(),
        country:joi.string().required(),
        image:joi.string().allow("",null)
    }).required()
})

module.exports.reviewSchema = joi.object({
    review:joi.object({
        comment:joi.string().required(),
        rating:joi.string().required().min(1).max(5)
    }).required(),
})