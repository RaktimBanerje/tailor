import React from 'react'

const MeasurementTab = ({choice, setChoice}) => {

  const handleChange = (event) => { 
    setChoice((choice) => ({ ...choice, mesurement: {...choice.mesurement, [event.target.name]: event.target.value}}))
  }

  return (
    <div className="tab-pane tab-pane--measurement" id="t4" role="tabpanel" aria-labelledby="t4-tab">
      <fieldset>
        <div className="block__header">
          <h4>
            Choose Measurement Process <a href="#"><i className="fa-solid fa-circle-info" /></a>
          </h4>
        </div>
        <div className="block__body">
          <ul className="custom-radio-list custom-radio-list--design">
            <li>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_measurement_process" defaultValue="At Shop" id="custom_form_measurement_process_1" defaultChecked />
                <label htmlFor="custom_form_measurement_process_1">
                  <figure>
                    <img src="assets/images/store.png" alt="" />
                  </figure>
                  <div>
                    <p>At Shop</p>
                  </div>
                </label>
              </div>
            </li>
            <li>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--design">
                <input type="radio" name="custom_form_measurement_process" defaultValue="By Customer" id="custom_form_measurement_process_2" />
                <label htmlFor="custom_form_measurement_process_2">
                  <figure>
                    <img src="assets/images/user(1).png" alt="" />
                  </figure>
                  <div>
                    <p>By Customer</p>
                  </div>
                </label>
              </div>
            </li>
          </ul>
          <div className="measurement-wrap">
            <div className="measurement-block">
              <h6 className="measurement-block__heading">Coat</h6>
              <div className="row">
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Length(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_length" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_length} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Chest(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_chest" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_chest} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Waist(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_waist" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_waist} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Hips(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_hips" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_hips} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Shoulders(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_shoulders" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_shoulders} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Sleeve(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_sleeve" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_sleeve} />
                  </div>
                </div>
              </div>
              <p className="text--sm text--dark fw-bold text-uppercase mt-4 mb-2">Neck</p>
              <div className="row">
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Front(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_neck_front" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_neck_front} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Back(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_neck_back" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_neck_back} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Vest(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_neck_vest" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_neck_vest} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">T. Coat(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_neck_t_coat" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_neck_t_coat} />
                  </div>
                </div>
              </div>
            </div>
            <div className="measurement-block">
              <h6 className="measurement-block__heading">Pant</h6>
              <div className="row">
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Waist(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_pant_waist" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_pant_waist} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Hips(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_pant_hips" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_pant_hips} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">In Length(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_pant_in_length" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_pant_in_length} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Length(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_pant_length" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_pant_length} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Thighs(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_pant_thighs" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_pant_thighs} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Knees(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_pant_knees" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_pant_knees} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Bottom(cm)</label>
                    <input type="number" name="custom_form_measurement_coat_pant_bottom" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_coat_pant_bottom} />
                  </div>
                </div>
              </div>
            </div>
            <div className="measurement-block">
              <h6 className="measurement-block__heading">Shirt</h6>
              <div className="row">
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Length(cm)</label>
                    <input type="number" name="custom_form_measurement_shirt_length" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_shirt_length} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Chest(cm)</label>
                    <input type="number" name="custom_form_measurement_shirt_chest" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_shirt_chest} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Waist(cm)</label>
                    <input type="number" name="custom_form_measurement_shirt_waist" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_shirt_waist} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Hips(cm)</label>
                    <input type="number" name="custom_form_measurement_shirt_hips" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_shirt_hips} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Shoulders(cm)</label>
                    <input type="number" name="custom_form_measurement_shirt_shoulders" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_shirt_shoulders} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">S.Sleeve(cm)</label>
                    <input type="number" name="custom_form_measurement_shirt_s_sleeve" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_shirt_s_sleeve} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">L.Sleeve(cm)</label>
                    <input type="number" name="custom_form_measurement_shirt_l_sleeve" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_shirt_l_sleeve} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Cuffs(cm)</label>
                    <input type="number" name="custom_form_measurement_shirt_cuffs" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_shirt_cuffs} />
                  </div>
                </div>
              </div>
              <p className="text--sm text--dark fw-bold text-uppercase mt-4 mb-2">Neck</p>
              <div className="row">
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label"> Front Panel(cm)</label>
                    <input type="number" name="custom_form_measurement_shirt_front_panel" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_shirt_front_panel} />
                  </div>
                </div>
                <div className="col">
                  <div className="form__field">
                    <label htmlFor className="top-label">Back Panel(cm)</label>
                    <input type="number" name="custom_form_measurement_shirt_back_panel" required onChange={(event) => handleChange(event)} value={choice.custom_form_measurement_shirt_back_panel} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  )
}

export default MeasurementTab