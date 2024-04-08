import React from 'react'

const InsideView = ({isActive, tab, data, choice, setChoice, selectedItem, setSelectedItem}) => {
  console.log(tab)
  return (
    <div id="view3" className={`theView ${isActive && 'active'}`}>
      <img id={1} rel="lining" name="Match lining" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-1" src={selectedItem.jacket.lining} />
      <img id={26} rel="jacketcollar" name="Single Breasted 1 Button" label type="jacket" style={{display: 'none'}} className="shirt_part" activestyle price={0} icon src={selectedItem.jacket.jacketcollar} />
      <img id={2} rel="vestlining" name="Single Breasted 1 Button" label type="vest" style={{display: 'none'}} className="shirt_part" activestyle price={0} icon src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestlining/fabric_2_view_3.png" />
      <img id={3} rel="vestcollar" name="Single Breasted 1 Button" label type="vest" style={{display: 'block'}} className="shirt_part" activestyle price={0} icon src={selectedItem.vest.vestcollar} />
      <img id={6} rel="vestedge" name="Straight" label type="vest" style={{display: 'none'}} className="shirt_part" activestyle price={0} icon="icon-icon-135" src={selectedItem.vest.vestedge} />
      <img id={5} rel="vestlapel" name="No Lapel" label type="vest" style={{display: 'block'}} className="shirt_part" activestyle price={0} icon="icon-icon-131" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestlapel/2_styletype_1_style_4_view_1.png" />
      <img id={7} rel="vestpockets" name="Flap Pocket" label type="vest" style={{display: 'none'}} className="shirt_part" activestyle price={0} icon="icon-icon-145" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestpockets/2_style_2_view_1.png" />
      <img id={8} rel="vestbreastpocket" name="Yes" label type="vest" style={{display: 'block'}} className="shirt_part" activestyle price={0} icon="icon-icon-139" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestbreastpocket/2_style_1_view_1.png" />
      <img id={9} rel="vestbuttons" name="Single Breasted 5 Buttons" label type="vest" style={{display: 'none'}} className="shirt_part" activestyle price={0} icon="icon-icon-123" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/vestbuttons/1_styletype_1_style_3_view_1.png" />
      <img id={10} rel="style" name="Single breasted" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-40" src={selectedItem.jacket.style[choice.jacket.style]} />
      <img id={11} rel="sleeves" name="No" label type="jacket" className="shirt_part" activestyle price={0} icon src={selectedItem.jacket.sleeves} />
      <img id={12} rel="pockets" name="Regular Flap Pockets" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-55" src={selectedItem.jacket.pockets[choice.jacket.pockets]} />
      <img id={13} rel="fit" name="Slim Fit" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-32" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/fit/styletype_1_style_1_view_1.png" />
      <img id={14} rel="pocketsquare" name="No" label type="jacket" className="shirt_part" activestyle price={0} icon="icon-icon-7" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pocketsquare/view_1.png" />
      <img id={15} rel="breastpocket" name="breastpocket" label type="jacket" className="shirt_part" activestyle price={0} icon src={selectedItem.jacket.breastpocket} />
      <img id={16} rel="lapel" name="Notch Slim" label type="jacket" className="shirt_part" activestyle price={0} icon="icon-icon-44" src={selectedItem.jacket.lapel[choice.jacket.lapel]} />
      <img id={30} rel="lapelthread" name="Match to fabric color" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-44" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/threads/view_1.png" />
      <img id={18} rel="threads" name="Match to fabric color" label type="jacket" className="shirt_part" activestyle price={0} icon src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/threads/view_1.png" />
      <img id={24} rel="buttons" name="2 Buttons" label type="jacket" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-32" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/buttons/1_styletype_1_style_2_view_1.png" />
      <img id={21} rel="pantstyle" name label type="pant" className="shirt_part" activestyle price={0} icon="icon-icon-87" src={selectedItem.pant.insideStyle} />
      <img id={22} rel="pantpockets" name="Diagonal-side Pocket" label type="pant" className="shirt_part custom-part" activestyle price={0} icon="suit-icon-Pant_Rounded_Pocket" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpockets/style_2_view_3.png" />
      <img id={23} rel="pantpleats" name="No Pleat" label type="pant" className="shirt_part custom-part" activestyle price={0} icon="suit-icon-Pant_Pleated" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantpleats/style_6_view_3.png" />
      <img id={24} rel="pantcuff" name="No Cuffs" label type="pant" className="shirt_part custom-part" activestyle price={0} icon="icon-icon-109" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantcuff/2_style_1_view_3.png" />
      <img id={20} rel="pantfit" name="Traditional Fit" label type="pant" className="shirt_part" activestyle price={0} icon="suit-icon-pant_Regular_Fit" src="https://www.oxfordtailor.com/customize/suit/media/men/generated_suit_images/pantfit/style_1_view_3.png" />
      <img id={25} rel="backpockets" name="style buttons" label type="pant" className="shirt_part custom-part" activestyle price={0} icon src={selectedItem.pant.insideBackpockets} />
    </div>
  )
}

export default InsideView


// // Select the container with id="view3"
// const view3Container = document.getElementById('view3');

// // Add an event listener to all img tags within the container
// view3Container.querySelectorAll('img').forEach(img => {
//   img.addEventListener('load', () => {
//     // Log the img element if src is changed
//     console.log(`Image source changed: ${img.src}`);
//   });
// });

// 12, 6, 11, 16, 10, 25, 26, 1, 21