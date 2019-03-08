

// const isEmpty = (value) => 
//         value === undefined ||
//         value === null ||
//         (typeof value === 'object' && Object.keys(value).length === 0) ||
//         (typeof value === 'string' && value.trim().length === 0);
  






function isEmpty(value) {
        // console.log("inside isEmpty()")

    return(
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );

}

module.exports = isEmpty;

















