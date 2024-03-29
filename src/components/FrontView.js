import React from 'react'

const FrontView = ({isActive, tab, data, choice, setChoice, selectedItem, setSelectedItem}) => {
  console.log(tab)
  return (
    <div id="view1" className={`theView ${isActive && 'active'}`}>
      <img id={22} rel="shoe" name="black" label type="pant" className="shirt_part" activestyle price={0} icon src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/shoe/style_1_view_1.png" />
      <img id={0} rel="maniquin" name="maniquin" label type="jacket" className="shirt_part part" activestyle price={0} icon src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/men/style_1_view_1.png" />
      <img id={1} rel="shirt" name="Shirt" label type="jacket" className="shirt_part part" activestyle price={0} icon src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/shirt/style_1_view_1.png" />
      <img id={4} rel="pantstyle" name label type="pant" className="shirt_part" activestyle price={0} icon="icon-icon-87" src={selectedItem.pant.style} />
      <img id={5} rel="pantpockets" name="Diagonal-side Pocket" label type="pant" className="shirt_part custom-part" activestyle price={0} icon="suit-icon-Pant_Rounded_Pocket" src={selectedItem.pant.pantpockets[choice.pant.pantpockets]} />
      <img id={6} rel="pantpleats" name="No Pleat" label type="pant" className="shirt_part custom-part" activestyle price={0} icon="suit-icon-Pant_Pleated" src={selectedItem.pant.pleats[choice.pant.pleats]} />
      <img id={7} rel="fastening" name="Centered" label type="pant" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-95" src={selectedItem.pant.fastening[choice.pant.fastening]} />
      <img id={8} rel="pantcuff" name="No Cuffs" label type="pant" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-109" src={selectedItem.pant.cuffs[choice.pant.cuffs]} />
      <img id={3} rel="pantfit" name="Traditional Fit" label type="pant" className="shirt_part custom-part" activestyle price={0} icon="suit-icon-pant_Regular_Fit" src={selectedItem.pant.fit[choice.pant.fit]} />
     
      <img id={11} rel="vestedge" name="Straight" label type="vest" style={{display: 'none'}} className="shirt_part custom-part" activestyle price={0} icon="icon-icon-135" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/veststyle/2_styletype_1_style_1_view_1.png" />
      <img id={10} rel="vestlapel" name="No Lapel" label type="vest" style={{display: 'block'}} className="shirt_part custom-part" activestyle price={0} icon="icon-icon-131" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestlapel/2_styletype_1_style_4_view_1.png" />
      <img id={12} rel="vestpockets" name="Flap Pocket" label type="vest" style={{display: 'none'}} className="shirt_part custoimm-part" activestyle price={0} icon="icon-icon-145" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestpockets/2_style_2_view_1.png" />
      <img id={13} rel="vestbreastpocket" name="Yes" label type="vest" style={{ display: 'block' }} className="shirt_part custom-part" activestyle price={0} icon="icon-icon-139" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestbreastpocket/2_style_1_view_1.png" />
      <img id={14} rel="vestbuttons" name="Single Breasted 5 Buttons" label type="vest" style={{display: 'none'}} className="shirt_part custom-part" activestyle price={0} icon="icon-icon-123" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestbuttons/1_styletype_1_style_3_view_1.png" />
      
      <img id={15} rel="style" name="Single breasted" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-40" src={tab === "PANT" ? null : selectedItem.jacket.style[choice.jacket.style]} />
      <img id={16} rel="sleeves" name="No" label type="jacket" className="shirt_part" activestyle price={0} icon src={tab === "PANT" ? null : selectedItem.jacket.sleeves} />
      <img id={17} rel="pockets" name="Regular Flap Pockets" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-55" src={tab === "PANT" ? null : selectedItem.jacket.pockets[choice.jacket.pockets]} />
      <img id={18} rel="fit" name="Slim Fit" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-32" src={tab === "PANT" ? null : selectedItem.jacket.fit[choice.jacket.fit]} />
      <img id={19} rel="pocketsquare" name="No" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-7" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pocketsquare/view_1.png" />
      <img id={20} rel="breastpocket" name="breastpocket" label type="jacket" className="shirt_part" activestyle price={0} icon src={tab === "PANT" ? null : selectedItem.jacket.breastpocket} />
      <img id={21} rel="lapel" name="Notch Slim" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-44" src={tab === "PANT" ? null : selectedItem.jacket.lapel[choice.jacket.lapel]} />
      <img id={31} rel="lapelthread" name="Match to fabric color" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-44" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/threads/view_1.png" />
      <img id={23} rel="threads" name="Match to fabric color" label type="jacket" className="shirt_part" activestyle price={0} icon src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/threads/view_1.png" />
      <img id={24} rel="buttons" name="2 Buttons" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-32" src={tab === "PANT" ? null : selectedItem.jacket.buttons[choice.jacket.buttons]} />
    </div>
  )
}

export default FrontView