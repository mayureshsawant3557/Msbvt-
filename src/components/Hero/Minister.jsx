function Minister() {
    const leaders = [
        {
            image: "/images/fadnavis.jpg",
            name: "Shri. Devendra Fadnavis",
            role: "Hon' Chief Minister"
        },

        {
            image: "/images/shinde.jpg",
            name: "Shri. Eknath Shinde",
            role: "Hon' Deputy Chief Minister"
        },

        {
            image: "/images/pawar.jpg",
            name: "Smt. Sunetra Ajit Pawar",
            role: "Hon' Deputy Chief Minister"
        },

        {
            image: "/images/lodha.jpg",
            name: "Shri. Mangal Prabhat Lodha",
            role: "Hon' Minister"
        }
    ]
    return (
        <div className="bg-white rounded-xl shadow-md p-2">
            <div className="flex justify-around items-center">

                {
                    leaders.map((leader, index) => (
                        <div key={index} className="text-center">

                            <img src={leader.image} alt={leader.name} className="w-14 h-14 rounded-full object-cover mx-auto mb-1" />

                            <h3 className="font-semibold text-xs"> {leader.name} </h3>

                            <p className="text-gray-600 text-xs">{leader.role}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Minister