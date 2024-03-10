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
            "backStyle": {
                "single_breasted": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/style/2_style_1_view_2.png",
                "double_breasted": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/style/2_style_2_view_2.png",
                "mandarin": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/style/2_style_3_view_2.png"
            },
            "lapel": {
                "notch": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/lapel/2_styletype_1_style_1_size_1_view_1.png",
                "peak": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/lapel/2_styletype_1_style_2_size_1_view_1.png",
                "shawl": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/lapel/2_styletype_1_style_3_size_1_view_1.png"
            },
            "pockets": {
                "regular_flap_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pockets/2_styletype_1_style_2_view_1.png",
                "double_welted_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pockets/2_styletype_1_style_3_view_1.png",
                "patch_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pockets/2_styletype_1_style_4_view_1.png"
            },
            "sleeve_buttons": {
                "two_buttons": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleevebuttons/2_style_1_view_2.png",
                "three_buttons": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleevebuttons/2_style_2_view_2.png",
                "four_buttons": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleevebuttons/2_style_3_view_2.png"
            },
            "buttons": {
                "one_button": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/buttons/1_styletype_1_style_1_view_1.png",
                "two_button": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/buttons/1_styletype_1_style_2_view_1.png",
                "three_button": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/buttons/1_styletype_1_style_3_view_1.png"
            },
            "vents": {
                "center_vent": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vents/style_1_view_2.png",
                "side_vent": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vents/style_2_view_2.png",
                "no_vent": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vents/style_3_view_2.png"
            },
            "sleeves": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleeves/2_view_1.png",
            "backSleeves": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleeves/2_view_2.png",
            "breastpocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleeves/2_view_1.png",
            "backcollar": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/backcollar/2_style_1_view_2.png"
            
        },
        "pant": {
            "style": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantstyle/2_style_1_view_1.png",
            "backStyle": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantstyle/2_style_1_view_2.png",
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
            "pantpockets": {
                "no_pocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpockets/style_5_view_1.png",
                "diagonal_side_pocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpockets/style_2_view_1.png",
                "rounded_pocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpockets/style_1_view_1.png",
                "vertical_pocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpockets/style_3_view_1.png"
            },
            "cuffs": {
                "no_cuffs": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantcuff/2_style_1_view_1.png",
                "with_cuffs": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantcuff/2_style_2_view_1.png"
            },
            "backpockets": {
                "one_pocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/backpantpocket/2_style_1_view_2.png",
                "two_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/backpantpocket/2_style_2_view_2.png"
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
            "backStyle": {
                "single_breasted": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/style/53_style_1_view_2.png",
                "double_breasted": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/style/53_style_2_view_2.png",
                "mandarin": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/style/53_style_3_view_2.png"
            },
            "lapel": {
                "notch": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/lapel/53_styletype_1_style_1_size_1_view_1.png",
                "peak": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/lapel/53_styletype_1_style_2_size_1_view_1.png",
                "shawl": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/lapel/53_styletype_1_style_3_size_1_view_1.png"
            },
            "pockets": {
                "regular_flap_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pockets/53_styletype_1_style_2_view_1.png",
                "double_welted_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pockets/53_styletype_1_style_3_view_1.png",
                "patch_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pockets/53_styletype_1_style_4_view_1.png"
            },
            "sleeve_buttons": {
                "two_buttons": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleevebuttons/1_style_1_view_2.png",
                "three_buttons": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleevebuttons/1_style_2_view_2.png",
                "four_buttons": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleevebuttons/1_style_3_view_2.png"
            },
            "buttons": {
                "one_button": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/buttons/1_styletype_1_style_1_view_1.png",
                "two_button": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/buttons/1_styletype_1_style_2_view_1.png",
                "three_button": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/buttons/1_styletype_1_style_3_view_1.png"
            },
            "vents": {
                "center_vent": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vents/style_1_view_2.png",
                "side_vent": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vents/style_2_view_2.png",
                "no_vent": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vents/style_3_view_2.png"
            },
            "sleeves": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleeves/53_view_1.png",
            "backSleeves": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleeves/53_view_2.png",
            "breastpocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/sleeves/53_view_1.png",
            "backcollar": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/backcollar/53_style_1_view_2.png"
        },
        "pant": {
            "style": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantstyle/53_style_1_view_1.png",
            "backStyle": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantstyle/53_style_1_view_2.png",
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
            "pantpockets": {
                "no_pocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpockets/style_5_view_1.png",
                "diagonal_side_pocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpockets/style_2_view_1.png",
                "rounded_pocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpockets/style_1_view_1.png",
                "vertical_pocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpockets/style_3_view_1.png"
            },
            "cuffs": {
                "no_cuffs": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantcuff/53_style_1_view_1.png",
                "with_cuffs": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantcuff/53_style_2_view_1.png"
            },
            "backpockets": {
                "one_pocket": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/backpantpocket/53_style_1_view_2.png",
                "two_pockets": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/backpantpocket/53_style_2_view_2.png"
            },
            "fastening": {
                "centered": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/fastening/style_1_view_1.png",
                "Off_centered": "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/fastening/style_2_view_1.png"
            }
        }
    }
]

export default data