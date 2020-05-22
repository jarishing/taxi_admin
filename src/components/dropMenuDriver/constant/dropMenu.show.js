const dropMenuShow = function(){

    return{
        DRIVER:{
            active:'在線司機',
            all:'所有司機',
            nonVaild: '待審批',
            banned: '已封鎖'
        },

        USER:{
            active:'在線用戶',
            all:'所有用戶'
        },

        ORDER:{
            new:'等待中訂單',
            accepted: '承接中訂單',
            canceled: '已取消訂單',
            confirmed: '已完成訂單',
            commented: '已評價訂單',
            badOrder: '已丟棄訂單' ,
            all: '所有訂單'
        },

        CLASS:{
            S: '最優先',
            A: 'A class',
            B: 'B class',
            C: 'C class',
            D: 'D class',
            E: 'E class'
        }
    }
}();

export default dropMenuShow;