
function Settings() {

    return (

        <section className="page">

            <span className="eyebrow">PREFERENCES</span>
            <h2>Settings</h2>
    
            <p>Manage your application preferences.</p>
    
            <div className="info-card">

                <h3>Notifications</h3>
        
                <label className="setting-option">

                    <input type="checkbox" defaultChecked />
                    Enable email notifications
                </label>
        
                <label className="setting-option">

                    <input type="checkbox" />
                    Enable browser notifications
                </label>
            </div>
        </section>
    )
}
  
export default Settings