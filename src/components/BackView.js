import React from 'react'

const BackView = ({isActive, tab, data, choice, setChoice, selectedItem, setSelectedItem}) => {
  return (
    <div id="view2" className={`theView ${isActive && 'active'}`}>
      <img id={22} rel="shoe" name="black" label type="pant" className="shirt_part" activestyle price={0} icon src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/shoe/style_1_view_2.png" />
      <img id={0} rel="maniquin" name="Man" label type="jacket" className="shirt_part part" activestyle price={0} icon src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/men/style_1_view_2.png" />
      <img id={1} rel="shirt" name="Man Shirt" label type="jacket" className="shirt_part part" activestyle price={0} icon src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/shirt/style_1_view_2.png" />
      <img id={3} rel="pantstyle" name label type="pant" className="shirt_part" activestyle price={0} icon="icon-icon-87" src={selectedItem.pant.backStyle} />
      <img id={2} rel="pantfit" name="Traditional Fit" label type="pant" className="shirt_part" activestyle price={0} icon="suit-icon-pant_Regular_Fit" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantfit/style_1_view_2.png" />
      <img id={86} rel="backpockets" name="style buttons" label type="pant" className="shirt_part custom-part" activestyle price={0} icon src={selectedItem.pant.backpockets[choice.pant.backpockets]} />
      <img id={4} rel="sleeves" name="No" label type="jacket" className="shirt_part" activestyle price={0} icon src={tab === "PANT" ? null : selectedItem.jacket.backSleeves} />
      <img id={6} rel="veststyle" name="Single Breasted" label type="vest" style={{display: 'none'}} className="shirt_part" activestyle price={0} icon src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/veststyle/2_styletype_1_style_1_view_2.png" />
      <img id={7} rel="style" name="Single breasted" label type="jacket" className="shirt_part" activestyle price={0} icon="icon-icon-40" src={tab === "PANT" ? null : selectedItem.jacket.backStyle[choice.jacket.style]} />
      <img id={9} rel="vents" name="NoVent" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-69" src={tab === "PANT" ? null : selectedItem.jacket.vents[choice.jacket.vents]} />
      <img id={29} rel="sleevethreads" name="Match to fabric color" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-66" src={tab === "PANT" ? null : "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/threads/view_2.png"} />
      <img id={11} rel="sleevebuttons" name="4 Buttons" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-66" src={tab === "PANT" ? null : selectedItem.jacket.sleeve_buttons[choice.jacket.sleeve_buttons]} />
      <img id={18} rel="fit" name="Slim Fit" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-32" src={tab === "PANT" ? null : "https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/fit/styletype_1_style_1_view_2.png"} />
      <img id={12} rel="pantcuff" name label type="pant" className="shirt_part" activestyle price={0} icon src={selectedItem.pant.cuffs[choice.pant.cuffs]} />
      <img id={13} rel="backcollar" name="No Back Collar" label type="jacket" style={{left: '0px', top: '0px'}} className="shirt_part custom-part" activestyle price={0} icon="icon-icon-17" src={tab === "PANT" ? null : selectedItem.jacket.backcollar} />
    </div>
  )
}

export default BackView