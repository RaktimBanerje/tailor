import React from 'react'

const PantTab = ({setView, choice, setChoice}) => {
  return (
    <div className="tab-pane" id="t3" role="tabpanel" aria-labelledby="t3-tab">
      {/* Fit */}
      <fieldset>
        <div className="block__header">
          <h4>
            Fit <a href="#"><i className="fa-solid fa-circle-info" /></a>
          </h4>
        </div>
        <div className="block__body">
          <ul className="custom-radio-list custom-radio-list--design">
            <li onClick={() => {
              setChoice((choice)=> ({...choice, pant: {...choice.pant, fit: "slim_fit"}}))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_fit" defaultValue="Slim Fit" id="custom_form_pant_fit_1" />
                <label htmlFor="custom_form_pant_fit_1">
                  <figure>
                    <i className="suit-icon-Pant_Slim_Fit" />
                  </figure>
                  <div>
                    <p>Slim Fit</p>
                  </div>
                </label>
              </div>
            </li>
            <li onClick={() => {
              setChoice((choice)=> ({...choice, pant: {...choice.pant, fit: "regular_fit"}}))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_fit" defaultValue="Regular Fit" id="custom_form_pant_fit_2" defaultChecked />
                <label htmlFor="custom_form_pant_fit_2">
                  <figure>
                    <i className="suit-icon-Pant_Regular_Fit" />
                  </figure>
                  <div>
                    <p>Regular Fit</p>
                  </div>
                </label>
              </div>
            </li>
            <li onClick={() => {
              setChoice((choice)=> ({...choice, pant: {...choice.pant, fit: "loose_fit"}}))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_fit" defaultValue="Loose Fit" id="custom_form_pant_fit_3" />
                <label htmlFor="custom_form_pant_fit_3">
                  <figure>
                    <i className="suit-icon-Pant_Regular_Fit" />
                  </figure>
                  <div>
                    <p>Loose Fit</p>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </fieldset>
      {/* Pleats */}
      <fieldset>
        <div className="block__header">
          <h4>
            Pleats <a href="#"><i className="fa-solid fa-circle-info" /></a>
          </h4>
        </div>
        <div className="block__body">
          <ul className="custom-radio-list custom-radio-list--design">
            <li onClick={() => {
              setChoice((choice)=> ({...choice, pant: {...choice.pant, pleats: "no_pleat"}}))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_pleats" defaultValue="No Pleat" id="custom_form_pant_pleats_1" defaultChecked />
                <label htmlFor="custom_form_pant_pleats_1">
                  <figure>
                    <i className="suit-icon-no_pleats" />
                  </figure>
                  <div>
                    <p>No Pleat</p>
                  </div>
                </label>
              </div>
            </li>
            <li onClick={() => {
              setChoice((choice)=> ({...choice, pant: {...choice.pant, pleats: "one_pleat"}}))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_pleats" defaultValue="One Pleat" id="custom_form_pant_pleats_2" />
                <label htmlFor="custom_form_pant_pleats_2">
                  <figure>
                    <i className="suit-icon-Pant_Pleated" />
                  </figure>
                  <div>
                    <p>One Pleat</p>
                  </div>
                </label>
              </div>
            </li>
            <li onClick={() => {
              setChoice((choice)=> ({...choice, pant: {...choice.pant, pleats: "two_pleats"}}))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_pleats" defaultValue="Two Pleats" id="custom_form_pant_pleats_3" />
                <label htmlFor="custom_form_pant_pleats_3">
                  <figure>
                    <i className="suit-icon-Pant_Pleats_Main_Icon" />
                  </figure>
                  <div>
                    <p>Two Pleats</p>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </fieldset>
      {/* Fastening  */}
      <fieldset>
        <div className="block__header">
          <h4>
            Fastening <a href="#"><i className="fa-solid fa-circle-info" /></a>
          </h4>
        </div>
        <div className="block__body">
          <ul className="custom-radio-list custom-radio-list--design">
            <li onClick={() => {
              setChoice((choice) => ({ ...choice, pant: { ...choice.pant, fastening: "centered" } }))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_fastening" defaultValue="Centered" id="custom_form_pant_fastening_1" defaultChecked />
                <label htmlFor="custom_form_pant_fastening_1">
                  <figure>
                    <i className="suit-icon-Pant_Centered" />
                  </figure>
                  <div>
                    <p>Centered</p>
                  </div>
                </label>
              </div>
            </li>
            <li onClick={() => {
              setChoice((choice) => ({ ...choice, pant: { ...choice.pant, fastening: "Off_centered" } }))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_fastening" defaultValue="Off Centered" id="custom_form_pant_fastening_2" />
                <label htmlFor="custom_form_pant_fastening_2">
                  <figure>
                    <i className="suit-icon-Pant_Off_Centered_Buttonless" />
                  </figure>
                  <div>
                    <p>Off Centered </p>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </fieldset>
      {/* Pockets */}
      <fieldset>
        <div className="block__header">
          <h4>
            Pockets <a href="#"><i className="fa-solid fa-circle-info" /></a>
          </h4>
        </div>
        <div className="block__body">
          <ul className="custom-radio-list custom-radio-list--design">
            <li onClick={() => {
              setChoice((choice) => ({ ...choice, pant: { ...choice.pant, pantpockets: "no_pocket" } }))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_pockets" defaultValue="No pocket" id="custom_form_pant_pockets_1" />
                <label htmlFor="custom_form_pant_pockets_1">
                  <figure>
                    <i className="suit-icon-No" />
                  </figure>
                  <div>
                    <p>No pocket</p>
                  </div>
                </label>
              </div>
            </li>
            <li onClick={() => {
              setChoice((choice) => ({ ...choice, pant: { ...choice.pant, pantpockets: "diagonal_side_pocket" } }))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_pockets" defaultValue="Diagonal-side Pocket" id="custom_form_pant_pockets_2" defaultChecked />
                <label htmlFor="custom_form_pant_pockets_2">
                  <figure>
                    <i className="suit-icon-Pant_No_Button" />
                  </figure>
                  <div>
                    <p>Diagonal-side Pocket</p>
                  </div>
                </label>
              </div>
            </li>
            <li onClick={() => {
              setChoice((choice) => ({ ...choice, pant: { ...choice.pant, pantpockets: "rounded_pocket" } }))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_pockets" defaultValue="Rounded Pocket" id="custom_form_pant_pockets_3" />
                <label htmlFor="custom_form_pant_pockets_3">
                  <figure>
                    <i className="suit-icon-Pant_Rounded_Pocket" />
                  </figure>
                  <div>
                    <p>Rounded Pocket</p>
                  </div>
                </label>
              </div>
            </li>
            <li onClick={() => {
              setChoice((choice) => ({ ...choice, pant: { ...choice.pant, pantpockets: "vertical_pocket" } }))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_pockets" defaultValue="Vertical Pocket" id="custom_form_pant_pockets_4" />
                <label htmlFor="custom_form_pant_pockets_4">
                  <figure>
                    <i className="suit-icon-Pant_Vertical_Pocket" />
                  </figure>
                  <div>
                    <p>Vertical Pocket</p>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </fieldset>
      {/* Cuffs  */}
      <fieldset>
        <div className="block__header">
          <h4>
            Cuffs <a href="#"><i className="fa-solid fa-circle-info" /></a>
          </h4>
        </div>
        <div className="block__body">
          <ul className="custom-radio-list custom-radio-list--design">
            <li onClick={() => {
              setChoice((choice) => ({ ...choice, pant: { ...choice.pant, cuffs: "no_cuffs" } }))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_cuffs" defaultValue="No Cuffs" id="custom_form_pant_cuffs_1" defaultChecked />
                <label htmlFor="custom_form_pant_cuffs_1">
                  <figure>
                    <i className="suit-icon-Pant_No_Pant_Cuffs" />
                  </figure>
                  <div>
                    <p>No Cuffs</p>
                  </div>
                </label>
              </div>
            </li>
            <li onClick={() => {
              setChoice((choice) => ({ ...choice, pant: { ...choice.pant, cuffs: "with_cuffs" } }))
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_cuffs" defaultValue="With Cuffs" id="custom_form_pant_cuffs_2" />
                <label htmlFor="custom_form_pant_cuffs_2">
                  <figure>
                    <i className="suit-icon-With_Pant_Cuffs" />
                  </figure>
                  <div>
                    <p>With Cuffs </p>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </fieldset>
      {/* Back Pockets */}
      <fieldset>
        <div className="block__header">
          <h4>
            Back Pockets <a href="#"><i className="fa-solid fa-circle-info" /></a>
          </h4>
        </div>
        <div className="block__body">
          <ul className="custom-radio-list custom-radio-list--design">
            <li onClick={() => {
              setChoice((choice) => ({ ...choice, pant: { ...choice.pant, backpockets: "one_pocket" } }))
              setView("BACK")
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_back_pockets" defaultValue="One Pocket" id="custom_form_back_pockets_1" defaultChecked />
                <label htmlFor="custom_form_back_pockets_1">
                  <figure>
                    <i className="suit-icon-single-pocket
                  " />
                  </figure>
                  <div>
                    <p>One Pocket</p>
                  </div>
                </label>
              </div>
            </li>
            <li onClick={() => {
              setChoice((choice) => ({ ...choice, pant: { ...choice.pant, backpockets: "two_pockets" } }))
              setView("BACK")
            }}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_pant_back_pockets" defaultValue="Two Pockets" id="custom_form_back_pockets_2" />
                <label htmlFor="custom_form_back_pockets_2">
                  <figure>
                    <i className="suit-icon-double-pocket-01" />
                  </figure>
                  <div>
                    <p>Two Pockets</p>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </fieldset>
    </div>
  )
}

export default PantTab