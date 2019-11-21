exports.getAllUsers = function() { 
    return [
        {
            id: 1,
            name: "Sarah" 
        },
        {
            id: 2,
            name: "David" }
    ]
}

exports.getOneUser = function(userId) { 
    switch (userId) {
        case "1":
            return {
                id: 1,
                name: "Sarah" 
            }
        case "2": return {
            id: 2,
            name: "David" 
        }
    }
}