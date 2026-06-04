import { useState } from "react"
function Sidebar() {

    const [showManual, setShowManual] = useState(false)
    const [showNotification, setShowNotification] = useState(false)
    const [showWebsite, setShowWebsite] = useState(false)
    const [showActs, setShowActs] = useState(false)
    const [showApproval, setShowApproval] = useState(false)

return (
    <div className="rounded-lg overflow-hidden">
       {/* User Manual */}
        <div className="bg-slate-400 text-white p-4 border-b">
        <div className="flex justify-between items-center cursor-pointer"onClick={() => setShowManual(!showManual)}>

        <div className="flex items-center gap-3">
            <span>📄</span>
            <p>User Manual</p>
            </div>
            <span className="text-xl font-bold">
                {showManual ? "˄" : "˅"}
            </span>
        </div>
        {showManual && (
            <div className="bg-white text-black p-3 mt-3">
                <p className="mb-2">Student Manual</p>
                <p>Institute Manual</p>
                </div>)
        }
        </div>
        
        {/* Notifications */}
        <div className="bg-slate-400 text-white p-3 border-b">
        <div className="flex justify-between items-center cursor-pointer"onClick={() => setShowNotification(!showNotification)}>

        <div className="flex items-center gap-3">
            <span>✉️</span>
            <p>Notifications / Circulars</p>
            </div>
            <span className="text-xl font-bold">
                {showNotification ? "˄" : "˅"}
            </span>
        </div>
        {showNotification && (
            <div className="bg-white text-black p-3 mt-3">
                <p className="mb-2">Exam Updates</p>
                <p>Circulars</p>
                </div>)
        }
        </div>

        {/* Related Websites */}
        <div className="bg-slate-400 text-white p-3 border-b">
        <div className="flex justify-between items-center cursor-pointer"onClick={() => setShowWebsite(!showWebsite)}>

        <div className="flex items-center gap-3">
            <span>📄</span>
            <p>Related Websites</p>
            </div>
            <span className="text-xl font-bold">
                {showWebsite ? "˄" : "˅"}
            </span>
        </div>
        {showWebsite && (
            <div className="bg-white text-black p-3 mt-3">
                <p className="mb-2">MahaDBT</p>
                <p>Skill India</p>
                </div>)
        }
        </div>

        {/* Acts */}
        <div className="bg-slate-400 text-white p-4 border-b">
        <div className="flex justify-between items-center cursor-pointer"onClick={() => setShowActs(!showActs)}>
        <div className="flex items-center gap-3">
            <span>📄</span>
            <p>Acts and Resolution</p>
            </div>
            <span className="text-xl font-bold">
                {showActs ? "˄" : "˅"}
            </span>
        </div>
        {showActs && (
            <div className="bg-white text-black p-3 mt-3">
                <p className="mb-2">Government Acts</p>
                <p>Board Resolution</p>
                </div>)
        }
        </div>
        {/* Approval */}
        <div className="bg-slate-400 text-white p-3">
        <div className="flex justify-between items-center cursor-pointer"onClick={() => setShowApproval(!showApproval)}>
        <div className="flex items-center gap-3">
            <span>📄</span>
            <p>Approval Order</p>
            </div>
            <span className="text-xl font-bold">
                {showApproval ? "˄" : "˅"}
            </span>
        </div>
        {showApproval && (
            <div className="bg-white text-black p-3 mt-3">
                <p className="mb-2">Order 2026</p>
                <p>Approval List</p>
                </div>)
        }
        </div>
    </div>
  )
}
export default Sidebar