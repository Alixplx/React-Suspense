
function Settings() {

    return (

        <section className="page">

            <h2>Settings</h2>
            <p>Manage your application preferences.</p>
    
            <div className="info-card">

                <h3>Account Settings</h3>
                <p>Update your profile and account preferences.</p>
        
                <label className="setting-option">

                    <input type="checkbox" defaultChecked />
                    Enable notifications
                </label>
        
                <label className="setting-option">
                    
                    <input type="checkbox" />
                    Enable dark mode
                </label>
            </div>
        </section>
    )
}
  
export default Settings