import React from 'react'

const JacketTab = ({choice, setChoice}) => {
  return (
    <div className="tab-pane" id="t2" role="tabpanel" aria-labelledby="t2-tab">
                    {/* Fit */}
                    <fieldset>
                      <div className="block__header">
                        <h4>
                          Fit <a href="#"><i className="fa-solid fa-circle-info" /></a>
                        </h4>
                      </div>
                      <div className="block__body">
                        <ul className="custom-radio-list custom-radio-list--design">
                          <li onClick={() => setChoice((choice)=> ({...choice, jacket: {...choice.jacket, fit: "slim_fit"}}))}>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_fit" defaultValue="Slim Fit" id="custom_form_jacket_fit_1" defaultChecked />
                              <label htmlFor="custom_form_jacket_fit_1">
                                <figure>
                                  <i className="suit-icon-Slim_Fit" />
                                </figure>
                                <div>
                                  <p>Slim Fit</p>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li onClick={() => setChoice((choice)=> ({...choice, jacket: {...choice.jacket, fit: "classic_fit"}}))}>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_fit" defaultValue="Classic Fit" id="custom_form_jacket_fit_2" />
                              <label htmlFor="custom_form_jacket_fit_2">
                                <figure>
                                  <i className="suit-icon-Fit_Main_Icon" />
                                </figure>
                                <div>
                                  <p>Classic Fit</p>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                    {/* Style */}
                    <fieldset>
                      <div className="block__header">
                        <h4>
                          Style <a href="#"><i className="fa-solid fa-circle-info" /></a>
                        </h4>
                      </div>
                      <div className="block__body">
                        <ul className="custom-radio-list custom-radio-list--design">
                          <li onClick={() => setChoice((choice)=> ({...choice, jacket: {...choice.jacket, style: "single_breasted"}}))}>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_style" defaultValue="Single breasted" id="custom_form_jacket_style_1" defaultChecked />
                              <label htmlFor="custom_form_jacket_style_1">
                                <figure>
                                  <i className="suit-icon-Single_Breasted_1_Button" />
                                </figure>
                                <div>
                                  <p>Single breasted </p>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li onClick={() => setChoice((choice)=> ({...choice, jacket: {...choice.jacket, style: "double_breasted"}}))}>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_style" defaultValue="Double Breasted" id="custom_form_jacket_style_2" />
                              <label htmlFor="custom_form_jacket_style_2">
                                <figure>
                                  <i className="suit-icon-Double_Breasted_2_Buttons" />
                                </figure>
                                <div>
                                  <p>Double Breasted</p>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li onClick={() => setChoice((choice)=> ({...choice, jacket: {...choice.jacket, style: "mandarin"}}))}>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_style" defaultValue="Mandarin" id="custom_form_jacket_style_3" />
                              <label htmlFor="custom_form_jacket_style_3">
                                <figure>
                                  <i className="suit-icon-Mandarin" />
                                </figure>
                                <div>
                                  <p>Mandarin</p>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                    {/* Lapel  */}
                    <fieldset>
                      <div className="block__header">
                        <h4>
                          Lapel <a href="#"><i className="fa-solid fa-circle-info" /></a>
                        </h4>
                      </div>
                      <div className="block__body">
                        <ul className="custom-radio-list custom-radio-list--design">
                          <li onClick={() => setChoice((choice)=> ({...choice, jacket: {...choice.jacket, lapel: "notch"}}))}>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lapel" defaultValue="Notch" id="custom_form_jacket_lapel_1" defaultChecked />
                              <label htmlFor="custom_form_jacket_lapel_1">
                                <figure>
                                  <i className="suit-icon-Notch" />
                                </figure>
                                <div>
                                  <p>Notch</p>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li onClick={() => setChoice((choice)=> ({...choice, jacket: {...choice.jacket, lapel: "peak"}}))}>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lapel" defaultValue="Peak" id="custom_form_jacket_lapel_2" />
                              <label htmlFor="custom_form_jacket_lapel_2">
                                <figure>
                                  <i className="suit-icon-Peak" />
                                </figure>
                                <div>
                                  <p>Peak</p>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li onClick={() => setChoice((choice)=> ({...choice, jacket: {...choice.jacket, lapel: "shawl"}}))}>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lapel" defaultValue="Shawl" id="custom_form_jacket_lapel_3" />
                              <label htmlFor="custom_form_jacket_lapel_3">
                                <figure>
                                  <i className="suit-icon-Shawl" />
                                </figure>
                                <div>
                                  <p>Shawl</p>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                    {/* Lapel Size */}
                    <fieldset>
                      <div className="block__header">
                        <h4>
                          Lapel Size <a href="#"><i className="fa-solid fa-circle-info" /></a>
                        </h4>
                      </div>
                      <div className="block__body">
                        <ul className="custom-radio-list custom-radio-list--design">
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lapel_size" defaultValue="Slim" id="jcustom_form_jacket_lapel_size_1" defaultChecked />
                              <label htmlFor="custom_form_jacket_lapel_size_1">
                                <figure>
                                  <i className="suit-icon-Slim_Lapel" />
                                </figure>
                                <div>
                                  <p>Slim</p>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lapel_size" defaultValue="Regular" id="jcustom_form_jacket_lapel_size_2" />
                              <label htmlFor="custom_form_jacket_lapel_size_2">
                                <figure>
                                  <i className="suit-icon-Standard" />
                                </figure>
                                <div>
                                  <p>Regular</p>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lapel_size" defaultValue="Wide" id="jcustom_form_jacket_lapel_size_2" />
                              <label htmlFor="custom_form_jacket_lapel_size_2">
                                <figure>
                                  <i className="suit-icon-Wide" />
                                </figure>
                                <div>
                                  <p>Wide</p>
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
                          <li onClick={() => setChoice((choice) => ({ ...choice, jacket: { ...choice.jacket, pockets: "regular_flap_pockets"}}))}>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket" defaultValue="Regular Flap Pockets" id="jacket_pocket_style_1" defaultChecked />
                              <label htmlFor="jacket_pocket_style_1">
                                <figure>
                                  <i className="suit-icon-With_Flap" />
                                </figure>
                                <div>
                                  <p>Regular Flap Pockets</p>
                                </div>
                              </label>
                            </div>
                          </li>
                          
                          <li onClick={() => setChoice((choice) => ({ ...choice, jacket: { ...choice.jacket, pockets: "double_welted_pockets" } }))}>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket" defaultValue="Double Welted Pockets" id="jacket_pocket_style_2" />
                              <label htmlFor="jacket_pocket_style_2">
                                <figure>
                                  <i className="suit-icon-Double_Welted" />
                                </figure>
                                <div>
                                  <p>Double Welted Pockets</p>
                                </div>
                              </label>
                            </div>
                          </li>
                          
                          <li onClick={() => setChoice((choice) => ({ ...choice, jacket: { ...choice.jacket, pockets: "patch_pockets" } }))}>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket" defaultValue="Patch Pockets" id="jacket_pocket_style_3" />
                              <label htmlFor="jacket_pocket_style_3">
                                <figure>
                                  <i className="suit-icon-Patched" />
                                </figure>
                                <div>
                                  <p>Patch Pockets</p>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                    {/* Sleeve Buttons */}
                    <fieldset>
                      <div className="block__header">
                        <h4>
                          Sleeve Buttons <a href="#"><i className="fa-solid fa-circle-info" /></a>
                        </h4>
                      </div>
                      <div className="block__body">
                        <ul className="custom-radio-list custom-radio-list--design">
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_sleeve_button" defaultValue="2 Buttons" id="custom_form_jacket_sleeve_button_1" />
                              <label htmlFor="custom_form_jacket_sleeve_button_1">
                                <figure>
                                  <i className="suit-icon-button2" />
                                </figure>
                                <div>
                                  <p>2 Buttons</p>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_sleeve_button" defaultValue="3 Buttons" id="custom_form_jacket_sleeve_button_2" />
                              <label htmlFor="custom_form_jacket_sleeve_button_2">
                                <figure>
                                  <i className="suit-icon-button3" />
                                </figure>
                                <div>
                                  <p>3 Buttons</p>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_sleeve_button" defaultValue="4 Buttons" id="custom_form_jacket_sleeve_button_3" defaultChecked />
                              <label htmlFor="custom_form_jacket_sleeve_button_3">
                                <figure>
                                  <i className="suit-icon-button4" />
                                </figure>
                                <div>
                                  <p>4 Buttons</p>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                    {/* Vents */}
                    <fieldset>
                      <div className="block__header">
                        <h4>
                          Vents <a href="#"><i className="fa-solid fa-circle-info" /></a>
                        </h4>
                      </div>
                      <div className="block__body">
                        <ul className="custom-radio-list custom-radio-list--design">
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_vents" defaultValue="Center Vent" id="custom_form_jacket_vents_1" defaultChecked />
                              <label htmlFor="custom_form_jacket_vents_1">
                                <figure>
                                  <i className="suit-icon-Center_Vents" />
                                </figure>
                                <div>
                                  <p>Center Vent</p>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_vents" defaultValue="Side Vent" id="custom_form_jacket_vents_2" />
                              <label htmlFor="custom_form_jacket_vents_2">
                                <figure>
                                  <i className="suit-icon-Side_Vents" />
                                </figure>
                                <div>
                                  <p>Side Vent</p>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_vents" defaultValue="No Vent" id="custom_form_jacket_vents_3" />
                              <label htmlFor="custom_form_jacket_vents_3">
                                <figure>
                                  <i className="suit-icon-Ventless" />
                                </figure>
                                <div>
                                  <p>No Vent</p>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                    {/* Buttons */}
                    <fieldset>
                      <div className="block__header">
                        <h4>
                          Buttons <a href="#"><i className="fa-solid fa-circle-info" /></a>
                        </h4>
                      </div>
                      <div className="block__body">
                        <ul className="custom-radio-list custom-radio-list--design">
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_buttons" defaultValue="1 Button " id="custom_form_jacket_buttons_1" />
                              <label htmlFor="custom_form_jacket_buttons_1">
                                <figure>
                                  <i className="suit-icon-Single_Breasted_1_Button" />
                                </figure>
                                <div>
                                  <p>1 Button </p>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_buttons" defaultValue="2 Buttons" id="custom_form_jacket_buttons_2" defaultChecked />
                              <label htmlFor="custom_form_jacket_buttons_2">
                                <figure>
                                  <i className="suit-icon-Single_Breasted_2_Button" />
                                </figure>
                                <div>
                                  <p>2 Buttons</p>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_buttons" defaultValue="3 Buttons" id="custom_form_jacket_buttons_3" />
                              <label htmlFor="custom_form_jacket_buttons_3">
                                <figure>
                                  <i className="suit-icon-Single_Breasted_3_Button" />
                                </figure>
                                <div>
                                  <p>3 Buttons</p>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                    {/* Brass Buttons */}
                    <fieldset>
                      <div className="block__header">
                        <h4>
                          Brass Buttons <a href="#"><i className="fa-solid fa-circle-info" /></a>
                        </h4>
                      </div>
                      <div className="block__body">
                        <ul className="custom-radio-list custom-radio-list--design">
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="Default" id="custom_form_jacket_brass_buttons_1" defaultChecked />
                              <label htmlFor="custom_form_jacket_brass_buttons_1">
                                <figure>
                                  <img src="assets/images/brass_button_darkgray.png" alt="" />
                                </figure>
                                <div>
                                  <p>Default</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="standard  white #SB1" id="custom_form_jacket_brass_buttons_2" />
                              <label htmlFor="custom_form_jacket_brass_buttons_2">
                                <figure>
                                  <img src="assets/images/brass_button_standard_white.png" alt="" />
                                </figure>
                                <div>
                                  <p>standard  white #SB1</p>
                                  <span>$2.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="standard light grey #SB3" id="custom_form_jacket_brass_buttons_3" />
                              <label htmlFor="custom_form_jacket_brass_buttons_3">
                                <figure>
                                  <img src="assets/images/brass_button_lightgray.png" alt="" />
                                </figure>
                                <div>
                                  <p>standard light grey #SB3</p>
                                  <span>$2.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="standard light brown #SB4" id="custom_form_jacket_brass_buttons_4" />
                              <label htmlFor="custom_form_jacket_brass_buttons_4">
                                <figure>
                                  <img src="assets/images/brass_button_standard_brown.png" alt="" />
                                </figure>
                                <div>
                                  <p>standard light brown #SB4</p>
                                  <span>$2.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="standard dark brown #SB5" id="custom_form_jacket_brass_buttons_5" />
                              <label htmlFor="custom_form_jacket_brass_buttons_5">
                                <figure>
                                  <img src="assets/images/brass_button_darkbrown.png" alt="" />
                                </figure>
                                <div>
                                  <p>standard dark brown #SB5</p>
                                  <span>$2.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="standard dark grey #SB6" id="custom_form_jacket_brass_buttons_6" />
                              <label htmlFor="custom_form_jacket_brass_buttons_6">
                                <figure>
                                  <img src="assets/images/brass_button_standard_darkgray.png" alt="" />
                                </figure>
                                <div>
                                  <p>standard dark grey #SB6</p>
                                  <span>$2.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="solid gold # BB7" id="custom_form_jacket_brass_buttons_7" />
                              <label htmlFor="custom_form_jacket_brass_buttons_7">
                                <figure>
                                  <img src="assets/images/brass_button_solid_gold.png" alt="" />
                                </figure>
                                <div>
                                  <p>solid gold # BB7</p>
                                  <span>$19.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="standard navy #SB8 " id="custom_form_jacket_brass_buttons_8" />
                              <label htmlFor="custom_form_jacket_brass_buttons_8">
                                <figure>
                                  <img src="assets/images/brass_button_standard_navy.png" alt="" />
                                </figure>
                                <div>
                                  <p>standard navy #SB8 </p>
                                  <span>$2.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="standard navy #SB8 " id="custom_form_jacket_brass_buttons_8" />
                              <label htmlFor="custom_form_jacket_brass_buttons_8">
                                <figure>
                                  <img src="assets/images/brass_button_standard_navy.png" alt="" />
                                </figure>
                                <div>
                                  <p>standard navy #SB8 </p>
                                  <span>$2.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="standard black #SB9" id="custom_form_jacket_brass_buttons_9" />
                              <label htmlFor="custom_form_jacket_brass_buttons_9">
                                <figure>
                                  <img src="assets/images/brass_button_standard_black.png" alt="" />
                                </figure>
                                <div>
                                  <p>standard black #SB9</p>
                                  <span>$2.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="coconut wood #CW2" id="custom_form_jacket_brass_buttons_10" />
                              <label htmlFor="custom_form_jacket_brass_buttons_10">
                                <figure>
                                  <img src="assets/images/brass_button_coconut_wood.png" alt="" />
                                </figure>
                                <div>
                                  <p>coconut wood #CW2</p>
                                  <span>$19.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="coconut wood black #CW3" id="custom_form_jacket_brass_buttons_11" />
                              <label htmlFor="custom_form_jacket_brass_buttons_11">
                                <figure>
                                  <img src="assets/images/brass_button_coconut_wood_black.png" alt="" />
                                </figure>
                                <div>
                                  <p>coconut wood black #CW3</p>
                                  <span>$19.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="coconut wood black #CW3" id="custom_form_jacket_brass_buttons_11" />
                              <label htmlFor="custom_form_jacket_brass_buttons_11">
                                <figure>
                                  <img src="assets/images/brass_button_coconut_wood_black.png" alt="" />
                                </figure>
                                <div>
                                  <p>coconut wood black #CW3</p>
                                  <span>$19.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="natural horn brown #HB1" id="custom_form_jacket_brass_buttons_12" />
                              <label htmlFor="custom_form_jacket_brass_buttons_12">
                                <figure>
                                  <img src="assets/images/brass_button_natural_horn_brown.png" alt="" />
                                </figure>
                                <div>
                                  <p>natural horn brown #HB1</p>
                                  <span>$19.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="natural horn black #HB2" id="custom_form_jacket_brass_buttons_13" />
                              <label htmlFor="custom_form_jacket_brass_buttons_13">
                                <figure>
                                  <img src="assets/images/brass_button_natural_horn_black.png" alt="" />
                                </figure>
                                <div>
                                  <p>natural horn black #HB2</p>
                                  <span>$19.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="natural horm navy #HB8" id="custom_form_jacket_brass_buttons_14" />
                              <label htmlFor="custom_form_jacket_brass_buttons_14">
                                <figure>
                                  <img src="assets/images/brass_button_natural_horn_navy.png" alt="" />
                                </figure>
                                <div>
                                  <p>natural horm navy #HB8</p>
                                  <span>$19.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="Metal Gold #BB3" id="custom_form_jacket_brass_buttons_15" />
                              <label htmlFor="custom_form_jacket_brass_buttons_15">
                                <figure>
                                  <img src="assets/images/brass_button_metal_gold.png" alt="" />
                                </figure>
                                <div>
                                  <p>Metal Gold #BB3</p>
                                  <span>$21.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="metal gold  #BB14" id="custom_form_jacket_brass_buttons_16" />
                              <label htmlFor="custom_form_jacket_brass_buttons_16">
                                <figure>
                                  <img src="assets/images/brass_button_metal_gold_2.png" alt="" />
                                </figure>
                                <div>
                                  <p>metal gold  #BB14</p>
                                  <span>$21.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="metal silver #BB10" id="custom_form_jacket_brass_buttons_17" />
                              <label htmlFor="custom_form_jacket_brass_buttons_17">
                                <figure>
                                  <img src="assets/images/brass_button_metal_silver.png" alt="" />
                                </figure>
                                <div>
                                  <p>metal silver #BB10</p>
                                  <span>$21.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_brass_buttons" defaultValue="metal silver# BB4" id="custom_form_jacket_brass_buttons_17" />
                              <label htmlFor="custom_form_jacket_brass_buttons_17">
                                <figure>
                                  <img src="assets/images/brass_button_metal_silver_2.png" alt="" />
                                </figure>
                                <div>
                                  <p>metal silver# BB4</p>
                                  <span>$21.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                    {/* Lining */}
                    <fieldset>
                      <div className="block__header">
                        <h4>
                          Lining <a href="#"><i className="fa-solid fa-circle-info" /></a>
                        </h4>
                      </div>
                      <div className="block__body">
                        <ul className="custom-radio-list custom-radio-list--design">
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="No" id="custom_form_jacket_lining_1" defaultChecked />
                              <label htmlFor="custom_form_jacket_lining_1">
                                <figure>
                                  <i className="suit-icon-No" />
                                </figure>
                                <div>
                                  <p>No</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Dark Purple lining" id="custom_form_jacket_lining_2" />
                              <label htmlFor="custom_form_jacket_lining_2">
                                <figure>
                                  <img src="assets/images/lining_dark_purple.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Dark Purple lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Solid Red lining" id="custom_form_jacket_lining_3" />
                              <label htmlFor="custom_form_jacket_lining_3">
                                <figure>
                                  <img src="assets/images/lining_solid_red.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Solid Red lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Grey Paisley lining" id="custom_form_jacket_lining_4" />
                              <label htmlFor="custom_form_jacket_lining_4">
                                <figure>
                                  <img src="assets/images/lining_gray_paislay.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Grey Paisley lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Light Blue lining" id="custom_form_jacket_lining_5" />
                              <label htmlFor="custom_form_jacket_lining_5">
                                <figure>
                                  <img src="assets/images/lining_light_blue.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Light Blue lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Yellow Gold Lining" id="custom_form_jacket_lining_6" />
                              <label htmlFor="custom_form_jacket_lining_6">
                                <figure>
                                  <img src="assets/images/lining_yellow_gold.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Yellow Gold Lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Navy lining" id="custom_form_jacket_lining_7" />
                              <label htmlFor="custom_form_jacket_lining_7">
                                <figure>
                                  <img src="assets/images/lining_navy.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Navy lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="light purple lining" id="custom_form_jacket_lining_8" />
                              <label htmlFor="custom_form_jacket_lining_8">
                                <figure>
                                  <img src="assets/images/lining_light_purple.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>light purple lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="light Blue pattern" id="custom_form_jacket_lining_9" />
                              <label htmlFor="custom_form_jacket_lining_9">
                                <figure>
                                  <img src="assets/images/lining_light_blue_pattern.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>light Blue pattern</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Navy pattern lining" id="custom_form_jacket_lining_10" />
                              <label htmlFor="custom_form_jacket_lining_10">
                                <figure>
                                  <img src="assets/images/lining_navy_pattern.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Navy pattern lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Purple Paisley lining" id="custom_form_jacket_lining_11" />
                              <label htmlFor="custom_form_jacket_lining_11">
                                <figure>
                                  <img src="assets/images/lining_purple_paislay.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Purple Paisley lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Solid Black lining" id="custom_form_jacket_lining_12" />
                              <label htmlFor="custom_form_jacket_lining_12">
                                <figure>
                                  <img src="assets/images/lining_solid_black.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Solid Black lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="solid Silver Grey" id="custom_form_jacket_lining_13" />
                              <label htmlFor="custom_form_jacket_lining_13">
                                <figure>
                                  <img src="assets/images/lining_solid_silver_gray.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>solid Silver Grey</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="black & white patterm" id="custom_form_jacket_lining_14" />
                              <label htmlFor="custom_form_jacket_lining_14">
                                <figure>
                                  <img src="assets/images/lining_black_white.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>black &amp; white patterm</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Red Pattern lining" id="custom_form_jacket_lining_15" />
                              <label htmlFor="custom_form_jacket_lining_15">
                                <figure>
                                  <img src="assets/images/lining_red_pattern.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Red Pattern lining </p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="blue paisley pattern" id="custom_form_jacket_lining_16" />
                              <label htmlFor="custom_form_jacket_lining_16">
                                <figure>
                                  <img src="assets/images/lining_blue_paislay_pattern.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>blue paisley pattern</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Royal Blue lining" id="custom_form_jacket_lining_17" />
                              <label htmlFor="custom_form_jacket_lining_17">
                                <figure>
                                  <img src="assets/images/lining_royal_blue.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Royal Blue lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Black Pattern lining" id="custom_form_jacket_lining_18" />
                              <label htmlFor="custom_form_jacket_lining_18">
                                <figure>
                                  <img src="assets/images/lining_black_pattern.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Black Pattern lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Solid Dark Grey" id="custom_form_jacket_lining_19" />
                              <label htmlFor="custom_form_jacket_lining_19">
                                <figure>
                                  <img src="assets/images/lining_solid_dark_gray.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Solid Dark Grey</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Maroon Red Lining" id="custom_form_jacket_lining_20" />
                              <label htmlFor="custom_form_jacket_lining_20">
                                <figure>
                                  <img src="assets/images/lining_maroon_red.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Maroon Red Lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Solid Khaki lining" id="custom_form_jacket_lining_21" />
                              <label htmlFor="custom_form_jacket_lining_21">
                                <figure>
                                  <img src="assets/images/lining_solid_khaki.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Solid Khaki lining</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Lemon Green" id="custom_form_jacket_lining_22" />
                              <label htmlFor="custom_form_jacket_lining_22">
                                <figure>
                                  <img src="assets/images/lining_lemon_green.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Lemon Green</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="solid white" id="custom_form_jacket_lining_23" />
                              <label htmlFor="custom_form_jacket_lining_23">
                                <figure>
                                  <img src="assets/images/lining_solid_white.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>solid white</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="colorful pattern" id="custom_form_jacket_lining_24" />
                              <label htmlFor="custom_form_jacket_lining_24">
                                <figure>
                                  <img src="assets/images/lining_colorful_pattern.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>colorful pattern</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="blue pattern" id="custom_form_jacket_lining_25" />
                              <label htmlFor="custom_form_jacket_lining_25">
                                <figure>
                                  <img src="assets/images/lining_blue_pattern.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>blue pattern</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Colorful Paisley" id="custom_form_jacket_lining_26" />
                              <label htmlFor="custom_form_jacket_lining_26">
                                <figure>
                                  <img src="assets/images/lining_colorful_paislay.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Colorful Paisley</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Blue Bulgaria" id="custom_form_jacket_lining_27" />
                              <label htmlFor="custom_form_jacket_lining_27">
                                <figure>
                                  <img src="assets/images/lining_blue_bulgaria.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Blue Bulgaria</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Black Bulgaria" id="custom_form_jacket_lining_28" />
                              <label htmlFor="custom_form_jacket_lining_28">
                                <figure>
                                  <img src="assets/images/lining_black_bulgaria.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Black Bulgaria</p>
                                  <span>$3.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Grayish Blue Pattern" id="custom_form_jacket_lining_29" />
                              <label htmlFor="custom_form_jacket_lining_29">
                                <figure>
                                  <img src="assets/images/lining_grayish_blue_pattern.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Grayish Blue Pattern</p>
                                  <span>$3.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_lining" defaultValue="Brown&Black lining" id="custom_form_jacket_lining_30" />
                              <label htmlFor="custom_form_jacket_lining_30">
                                <figure>
                                  <img src="assets/images/lining_brown_black_pattern.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Brown&amp;Black lining</p>
                                  <span>$3.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                    {/* Pocket Square */}
                    <fieldset>
                      <div className="block__header">
                        <h4>
                          Pocket Square <a href="#"><i className="fa-solid fa-circle-info" /></a>
                        </h4>
                      </div>
                      <div className="block__body">
                        <ul className="custom-radio-list custom-radio-list--design">
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket_square" defaultValue="No" id="custom_form_jacket_pocket_square_1" defaultChecked />
                              <label htmlFor="custom_form_jacket_pocket_square_1">
                                <figure>
                                  <i className="suit-icon-No" />
                                </figure>
                                <div>
                                  <p>No</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket_square" defaultValue="Black polka dots" id="custom_form_jacket_pocket_square_2" />
                              <label htmlFor="custom_form_jacket_pocket_square_2">
                                <figure>
                                  <img src="assets/images/pocket_sqaure_black_polka_dots.JPG" alt="" />
                                </figure>
                                <div>
                                  <p>Black polka dots</p>
                                  <span>$5.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket_square" defaultValue="Dark blue" id="custom_form_jacket_pocket_square_3" />
                              <label htmlFor="custom_form_jacket_pocket_square_3">
                                <figure>
                                  <img src="assets/images/pocket_sqaure_dark_blue.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Dark blue</p>
                                  <span>$5.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket_square" defaultValue="Dark purple" id="custom_form_jacket_pocket_square_4" />
                              <label htmlFor="custom_form_jacket_pocket_square_4">
                                <figure>
                                  <img src="assets/images/pocket_sqaure_dark_purple.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Dark purple</p>
                                  <span>$5.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket_square" defaultValue="Light blue" id="custom_form_jacket_pocket_square_5" />
                              <label htmlFor="custom_form_jacket_pocket_square_5">
                                <figure>
                                  <img src="assets/images/pocket_sqaure_light_blue.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Light blue</p>
                                  <span>$5.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket_square" defaultValue="Light pink" id="custom_form_jacket_pocket_square_6" />
                              <label htmlFor="custom_form_jacket_pocket_square_6">
                                <figure>
                                  <img src="assets/images/pocket_sqaure_light_pink.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Light pink</p>
                                  <span>$5.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket_square" defaultValue="Navy polkat dots" id="custom_form_jacket_pocket_square_7" />
                              <label htmlFor="custom_form_jacket_pocket_square_7">
                                <figure>
                                  <img src="assets/images/pocket_sqaure_navy_polka_dots.JPG" alt="" />
                                </figure>
                                <div>
                                  <p>Navy polkat dots</p>
                                  <span>$5.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket_square" defaultValue="Plain white" id="custom_form_jacket_pocket_square_8" />
                              <label htmlFor="custom_form_jacket_pocket_square_8">
                                <figure>
                                  <img src="assets/images/pocket_sqaure_plain_white.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Plain white</p>
                                  <span>$5.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket_square" defaultValue="Red" id="custom_form_jacket_pocket_square_9" />
                              <label htmlFor="custom_form_jacket_pocket_square_9">
                                <figure>
                                  <img src="assets/images/pocket_sqaure_red.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Red</p>
                                  <span>$5.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket_square" defaultValue="Solid black" id="custom_form_jacket_pocket_square_10" />
                              <label htmlFor="custom_form_jacket_pocket_square_10">
                                <figure>
                                  <img src="assets/images/pocket_sqaure_solid_black.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Solid black</p>
                                  <span>$5.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket_square" defaultValue="Solid navy" id="custom_form_jacket_pocket_square_11" />
                              <label htmlFor="custom_form_jacket_pocket_square_11">
                                <figure>
                                  <img src="assets/images/pocket_square_solid_navy.jpg" alt="" />
                                </figure>
                                <div>
                                  <p>Solid navy</p>
                                  <span>$5.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_pocket_square" defaultValue="White polka dots" id="custom_form_jacket_pocket_square_12" />
                              <label htmlFor="custom_form_jacket_pocket_square_12">
                                <figure>
                                  <img src="assets/images/pocket_sqaure_white_polka_dots.JPG" alt="" />
                                </figure>
                                <div>
                                  <p>White polka dots</p>
                                  <span>$5.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </fieldset>
                    {/* Threads */}
                    <fieldset>
                      <div className="block__header">
                        <h4>
                          Threads <a href="#"><i className="fa-solid fa-circle-info" /></a>
                        </h4>
                      </div>
                      <div className="block__body">
                        <ul className="custom-radio-list custom-radio-list--design">
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_threads" defaultValue="Match to fabric color" id="custom_form_jacket_threads_1" defaultChecked />
                              <label htmlFor="custom_form_jacket_threads_1">
                                <figure>
                                  <i className="suit-icon-No" />
                                </figure>
                                <div>
                                  <p>Match to fabric color</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_threads" defaultValue="All" id="custom_form_jacket_threads_2" />
                              <label htmlFor="custom_form_jacket_threads_2">
                                <figure>
                                  <i className="suit-icon-Single_Breasted_1_Button" />
                                </figure>
                                <div>
                                  <p>All</p>
                                  <span>$0.00</span>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                              <input type="radio" name="custom_form_jacket_threads" defaultValue="Collar and Sleeves" id="custom_form_jacket_threads_3" />
                              <label htmlFor="custom_form_jacket_threads_3">
                                <figure>
                                  <i className="suit-icon-sleeve_lapel" />
                                </figure>
                                <div>
                                  <p>Collar and Sleeves</p>
                                  <span>$5.00</span>
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

export default JacketTab