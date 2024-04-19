const createProduct = () => {
    return new Promise((resolve, reject) => {
        try {
            resolve({})
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = {
    createProduct
}