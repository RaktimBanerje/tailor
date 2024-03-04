import React from 'react'

const FabricTab = ({data, setSelectedItem}) => {
  return (
    <div className="tab-pane active" id="t1" role="tabpanel" aria-labelledby="t1-tab">
      <ul className="row custom-radio-list">
        {data.map((item, index) => (
            <li className="col col--fabric" onClick={() => setSelectedItem(item)}>
              <div className="custom-radio-input-wrap custom-radio-input-wrap--fabric">
                <input type="radio" name="custom_form_fabric" defaultValue={`fabric_id_${item.id}`} id={`fabric_id_${item.id}`} defaultChecked />
                <label htmlFor={`fabric_id_${item.id}`}>
                  <figure>
                    <img src={item.image} alt="" />
                  </figure>
                  <div>
                    <p className="text-uppercase fabric-title">{item.name}</p>
                    <p className="fabric-desc">{item.description}</p>
                    <p className="fabric-price mb-0">${item.price}</p>
                    <div className="btn--more-info">
                      <a href="#"><i className="fa-solid fa-magnifying-glass" /></a>
                    </div>
                  </div>
                </label>
              </div>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default FabricTab