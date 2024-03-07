import React from 'react'
import FrontView from './components/FrontView'
import BackView from './components/BackView'
import SideView from './components/InsideView'
import InsideView from './components/InsideView'
import FabricTab from './components/FabricTab'
import JacketTab from './components/JacketTab'
import MeasurementTab from './components/MeasurementTab'
import ConfirmationTab from './components/ConfirmationTab'
import data from './data'
import PantTab from './components/PantTab'

const App = () => {
  
  const [records, setRecords] = React.useState(data)

  const [view, setView] = React.useState('FRONT')
  const handleViewChange = (view) => {setView(view)}

  const [tab, setTab] = React.useState('FABRIC')
  const handleTabChange = (tab) => {setTab(tab)}
  
  const [selectedItem, setSelectedItem] = React.useState(data[0])
  const [choice, setChoice] = React.useState({
    febric_id: 1,
    jacket: {
      fit: "smart_fit",
      style: "single_breasted",
      lapel: "notch",
      pockets: "regular_flap_pockets"
    },
    pant: {
      fit: "slim_fit",
      pleats: "no_pleat",
      fastening: "centered"
    },
    mesurement: {
      custom_form_measurement_coat_length: "",
      custom_form_measurement_coat_chest: "",
      custom_form_measurement_coat_waist: "",
      custom_form_measurement_coat_hips: "",
      custom_form_measurement_coat_shoulders: "",
      custom_form_measurement_coat_sleeve: "",
      custom_form_measurement_coat_neck_front: "",
      custom_form_measurement_coat_neck_back: "",
      custom_form_measurement_coat_neck_vest: "",
      custom_form_measurement_coat_neck_t_coat: "",
      custom_form_measurement_coat_pant_waist: "",
      custom_form_measurement_coat_pant_hips: "",
      custom_form_measurement_coat_pant_in_length: "",
      custom_form_measurement_coat_pant_length: "",
      custom_form_measurement_coat_pant_thighs: "",
      custom_form_measurement_coat_pant_knees: "",
      custom_form_measurement_coat_pant_bottom: "",
      custom_form_measurement_shirt_length: "",
      custom_form_measurement_shirt_chest: "",
      custom_form_measurement_shirt_waist: "",
      custom_form_measurement_shirt_hips: "",
      custom_form_measurement_shirt_shoulders: "",
      custom_form_measurement_shirt_s_sleeve: "",
      custom_form_measurement_shirt_l_sleeve: "",
      custom_form_measurement_shirt_cuffs: "",
      custom_form_measurement_shirt_front_panel: "",
      custom_form_measurement_shirt_back_panel: ""
    }
  })

  React.useEffect(() => {
    console.log(records)
  }, [])

  return (
    <main className="site-content">
      <div className="custom-wrap">
        <div className="row">
          <div className="col col--form">
            {/* Customisation Tab */}
            <div className="customisation-form-wrap">
              <form action="#">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className={tab == "FABRIC" ? 'nav-link active' : 'nav-link'} id="t1-tab" data-bs-toggle="tab" data-bs-target="#t1" type="button" role="tab" aria-controls="t1" aria-selected="true"  onClick={() => handleTabChange("FABRIC")}>1. Fabric</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className={tab == "JACKET" ? 'nav-link active' : 'nav-link'} id="t2-tab" data-bs-toggle="tab" data-bs-target="#t2" type="button" role="tab" aria-controls="t2" aria-selected="false" onClick={() => handleTabChange("JACKET")}>2. Jacket Design</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className={tab == "PANT" ? 'nav-link active' : 'nav-link'} id="t3-tab" data-bs-toggle="tab" data-bs-target="#t3" type="button" role="tab" aria-controls="t3" aria-selected="false" onClick={() => handleTabChange("PANT")}>3. Pants Design</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className={tab == "MESUREMENT" ? 'nav-link active' : 'nav-link'} id="t4-tab" data-bs-toggle="tab" data-bs-target="#t4" type="button" role="tab" aria-controls="t4" aria-selected="false" onClick={() => handleTabChange("MESUREMENT")}>4. Measurement</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className={tab == "CONFIRMATION" ? 'nav-link active' : 'nav-link'} id="t5-tab" data-bs-toggle="tab" data-bs-target="#t5" type="button" role="tab" aria-controls="t5" aria-selected="false" onClick={() => handleTabChange("CONFIRMATION")}>5. Confirmation</button>
                  </li>
                </ul>
                <div className="tab-content">
                  {/* Fabric Design Tab Pane  */}
                  <FabricTab tab={tab} data={records} choice={choice} setChoice={setChoice} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
                  {/* Jacket Design Tab Pane  */}
                  <JacketTab tab={tab}       data={records} choice={choice} setChoice={setChoice} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
                  {/* Pants Design Tab Pane */}
                  <PantTab tab={tab}      data={records} choice={choice} setChoice={setChoice} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
                  {/* Measurement Tab Pane */}
                  <MeasurementTab tab={tab} data={records} choice={choice} setChoice={setChoice} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
                  {/* Confirmation Tab Pane */}
                  <ConfirmationTab tab={tab} data={records} choice={choice} setChoice={setChoice} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
                </div>
              </form>
            </div>
          </div>
          <div className="col col--preview">
            {/* Customisation Preview  */}
            <div className="customisation__prev-wrap">
              {/* <ul class="prev-main">records
              <li></li>
            </ul> */}
              <div id="mainImageHolder">
                <FrontView  isActive={view == "FRONT"}  data={records} choice={choice} setChoice={setChoice} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
                <BackView   isActive={view == "BACK"}   data={records} choice={choice} setChoice={setChoice} selectedItem={selectedItem} setSelectedItem={setSelectedItem}  />
                <InsideView isActive={view == "INSIDE"} data={records} choice={choice} setChoice={setChoice} selectedItem={selectedItem} setSelectedItem={setSelectedItem}  />
              
                <div className="loader-wrap">
                  <div className="loader-wrap__inner">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="prev-btns">
                <li className={view == "FRONT" && 'active'}>
                  <a href="javascript:void(0)" onClick={() => handleViewChange("FRONT")}>Front</a>
                </li>
                <li className={view == "BACK" && 'active'}>
                  <a href="javascript:void(0)" onClick={() => handleViewChange("BACK")}>Back</a>
                </li>
                <li className={view == "INSIDE" && 'active'}>
                  <a href="javascript:void(0)" onClick={() => handleViewChange("INSIDE")}>Inside</a>
                </li>
              </ul>
            </div>
          </div>
                   
          <div className="col col--meta-info">
            {/* Customisation Meta Info */}
            <div className="customisation-meta-info">
              <h3>Custom 2 Piece</h3>
              <h4><span>$</span><span>200.00</span></h4>
            </div>
          </div>
        </div>
        <div className="language-translator-wrap">
          <select name id>
            <option value selected disabled>Select Language</option>
            <option value="eng">English</option>
            <option value="esr">Spanish</option>
          </select>
        </div>
      </div>
    </main>
  )
}

export default App