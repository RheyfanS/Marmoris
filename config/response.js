module.exports = {
    commonError:{
        error: true,
        msg : 'Terjadi Kesalahan'
    },
    commonErrorMsg: (msg) => {
        return {
            error: true,
            msg : msg
        }
    },
    commonSuccesss: {
        error: false,
        msg : 'Berhasil Memuat'
    },
    commonSuccessMsg: (msg) => {
        return {
            error: false,
            msg : msg
        }
    },
    commonResult: (data) => {
        return {
            error : false,
            msg : 'Berhasil memuat Data',
            data : data
        }
    }
}