// exports is shorthand for module.exports
// shorthand can be used when assigning methods to exports,
// but not when assigning to an entire function

const rect = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(
            new Error(
                `Rectangle dimensions must be greater than 0. Recieved: ${x}, ${y}`
            )
        )
    } else {
        setTimeout(
            () =>
                // first argument null means no error
                callback(null, {
                    // x and y can be accessed because of closures
                    perimeter: () => 2 * (x + y),
                    area: () => x * y,
                }),
            2000
        )
    }
}

export default rect

// module.exports = (x, y, callback) => {
//     if (x <= 0 || y <= 0) {
//         callback(
//             new Error(
//                 `Rectangle dimensions must be greater than 0. Recieved: ${x}, ${y}`
//             )
//         )
//     } else {
//         setTimeout(
//             () =>
//                 // first argument null means no error
//                 callback(null, {
//                     // x and y can be accessed because of closures
//                     perimeter: () => 2 * (x + y),
//                     area: () => x * y,
//                 }),
//             2000
//         )
//     }
// }
