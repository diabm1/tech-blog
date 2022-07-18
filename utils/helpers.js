module.exports = {
    format_data: date => {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
}