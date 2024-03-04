import React from 'react'

const ConfirmationTab = ({choice}) => {
  return (
    <div className="tab-pane" id="t5" role="tabpanel" aria-labelledby="t5-tab">

      <pre>
        {JSON.stringify(choice, null, 2)}
      </pre>
    {/* <div className="conf-wrap conf-wrap--fabric">
      <h4 className="conf-wrap__heading">Fabric</h4>
      <div className="row conf-wrap__info-grid">
        <div className="col">
          <div className="conf-info-card">
            <figure>
              <img src="assets/images/fabric-1.jpg" alt="" />
            </figure>
            <p className="conf-info-card__portion-value">Fabric Name</p>
          </div>
        </div>
      </div>
    </div>
    <div className="conf-wrap">
      <h4 className="conf-wrap__heading">Jacket</h4>
      <div className="row conf-wrap__info-grid">
        <div className="col">
          <div className="conf-info-card">
            <p className="conf-info-card__portion-heading">Lapel Style</p>
            <figure>
              <img src="assets/images/lapel_peak.png" alt="" />
            </figure>
            <p className="conf-info-card__portion-value">Notch</p>
          </div>
        </div>
        <div className="col">
          <div className="conf-info-card">
            <p className="conf-info-card__portion-heading">Lapel Style</p>
            <figure>
              <img src="assets/images/lapel_peak.png" alt="" />
            </figure>
            <p className="conf-info-card__portion-value">Notch</p>
          </div>
        </div>
        <div className="col">
          <div className="conf-info-card">
            <p className="conf-info-card__portion-heading">Lapel Style</p>
            <figure>
              <img src="assets/images/lapel_peak.png" alt="" />
            </figure>
            <p className="conf-info-card__portion-value">Notch</p>
          </div>
        </div>
        <div className="col">
          <div className="conf-info-card">
            <p className="conf-info-card__portion-heading">Lapel Style</p>
            <figure>
              <img src="assets/images/lapel_peak.png" alt="" />
            </figure>
            <p className="conf-info-card__portion-value">Notch</p>
          </div>
        </div>
      </div>
    </div>
    <div className="conf-wrap">
      <h4 className="conf-wrap__heading">Pant</h4>
      <div className="row conf-wrap__info-grid">
        <div className="col">
          <div className="conf-info-card">
            <p className="conf-info-card__portion-heading">Lapel Style</p>
            <figure>
              <img src="assets/images/lapel_peak.png" alt="" />
            </figure>
            <p className="conf-info-card__portion-value">Notch</p>
          </div>
        </div>
        <div className="col">
          <div className="conf-info-card">
            <p className="conf-info-card__portion-heading">Lapel Style</p>
            <figure>
              <img src="assets/images/lapel_peak.png" alt="" />
            </figure>
            <p className="conf-info-card__portion-value">Notch</p>
          </div>
        </div>
        <div className="col">
          <div className="conf-info-card">
            <p className="conf-info-card__portion-heading">Lapel Style</p>
            <figure>
              <img src="assets/images/lapel_peak.png" alt="" />
            </figure>
            <p className="conf-info-card__portion-value">Notch</p>
          </div>
        </div>
        <div className="col">
          <div className="conf-info-card">
            <p className="conf-info-card__portion-heading">Lapel Style</p>
            <figure>
              <img src="assets/images/lapel_peak.png" alt="" />
            </figure>
            <p className="conf-info-card__portion-value">Notch</p>
          </div>
        </div>
      </div>
    </div> */}
  </div>
  )
}

export default ConfirmationTab