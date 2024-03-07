const data = [
    {
        "id": 1,
        "name": "Fabric 1",
        "description": "Loreum ipsum",
        "price": 200,
        "image": "https://www.oxfordtailor.com/customize/suit/media/men/fabric_images/display_thumb/4700-1-360_1_2.png",
        "jacket": {
            "fit": {
                "slim_fit": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/fit/styletype_1_style_1_view_1.png",
                "classic_fit": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/fit/styletype_1_style_2_view_1.png"
            },
            "style": {
                "single_breasted": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/style/2_style_1_view_1.png",
                "double_breasted": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/style/2_style_2_view_1.png",
                "mandarin": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/style/2_style_3_view_1.png"
            },
            "lapel": {
                "notch": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/lapel/2_styletype_1_style_1_size_1_view_1.png",
                "peak": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/lapel/2_styletype_1_style_2_size_1_view_1.png",
                "shawl": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/lapel/2_styletype_1_style_3_size_1_view_1.png"
            },
            "pockets": {
                "regular_flap_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestpockets/2_style_2_view_1.png",
                "double_welted_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestpockets/2_style_3_view_1.png",
                "patch_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestpockets/2_style_4_view_1.png"
            },
            "sleeves": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleeves/2_view_1.png",
            "breastpocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleeves/2_view_1.png"
        },
        "pant": {
            "style": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantstyle/2_style_1_view_1.png",
            "fit": {
                "slim_fit": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantfit/style_2_view_1.png",
                "regular_fit": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantfit/style_1_view_1.png",
                "loose_fit": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantfit/style_3_view_1.png"
            },
            "pleats": {
                "no_pleat": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpleats/style_6_view_1.png",
                "one_pleat": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpleats/style_1_view_1.png",
                "two_pleats": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpleats/style_2_view_1.png"
            },
            "fastening": {
                "centered": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/fastening/style_1_view_1.png",
                "Off_centered": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/fastening/style_2_view_1.png"
            }
        }
    },
    {
        "id": 2,
        "name": "Fabric 2",
        "description": "Loreum ipsum",
        "price": 150,
        "image": "https://www.oxfordtailor.com/customize/suit/media/men/fabric_images/display_thumb/4700-29-3_3.jpg",
        "jacket": {
            "fit": {
                "slim_fit": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/fit/styletype_2_style_1_view_1.png",
                "classic_fit": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/fit/styletype_2_style_2_view_1.png"
            },
            "style": {
                "single_breasted": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/style/53_style_1_view_1.png",
                "double_breasted": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/style/53_style_2_view_1.png",
                "mandarin": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/style/53_style_3_view_1.png"
            },
            "lapel": {
                "notch": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/lapel/53_styletype_1_style_1_size_1_view_1.png",
                "peak": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/lapel/53_styletype_1_style_2_size_1_view_1.png",
                "shawl": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/lapel/53_styletype_1_style_3_size_1_view_1.png"
            },
            "pockets": {
                "regular_flap_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestpockets/53_style_2_view_1.png",
                "double_welted_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestpockets/53_style_3_view_1.png",
                "patch_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestpockets/53_style_4_view_1.png"
            },
            "sleeves": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleeves/53_view_1.png",
            "breastpocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleeves/53_view_1.png"
        },
        "pant": {
            "style": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantstyle/53_style_1_view_1.png",
            "fit": {
                "slim_fit": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantfit/style_2_view_1.png",
                "regular_fit": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantfit/style_1_view_1.png",
                "loose_fit": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantfit/style_3_view_1.png"
            },
            "pleats": {
                "no_pleat": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpleats/style_6_view_1.png",
                "one_pleat": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpleats/style_1_view_1.png",
                "two_pleats": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpleats/style_2_view_1.png"
            },
            "fastening": {
                "centered": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/fastening/style_1_view_1.png",
                "Off_centered": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/fastening/style_2_view_1.png"
            }
        }
    }
]

export default data