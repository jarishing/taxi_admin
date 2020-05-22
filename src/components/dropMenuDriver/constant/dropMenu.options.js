const dropMenuOption = function(){

    return {
        
        DRIVER      : [
            { value: 'active', label: '在線司機' },
            { value: 'all', label: '所有司機' },
            { value: 'nonVaild', label: '待審批'},
            { value: 'banned', label: '已封鎖'}
        ],

        USER        : [
            { value: 'active', label: '在線用戶'},
            { value: 'all', label: '所有用戶'}
        ],
        
        ORDER       : [
            { value: 'new', label: '等待中訂單' },
            { value: 'accepted', label: '承接中訂單' },
            { value: 'canceled', label: '已取消訂單'},
            { value: 'confirmed', label: '已完成訂單'},
            { value: 'commented', label: '已評價訂單'},
            { value: 'badOrder', label: '已丟棄訂單' },
            { value: 'all', label: '所有訂單' }
        ],

        CLASS       : [
            { value: 'S', label: '最優先' },
            { value: 'A', label: 'A class' },
            { value: 'B', label: 'B class'},
            { value: 'C', label: 'C class'},
            { value: 'D', label: 'D class' },
            { value: 'E', label: 'E class' }
        ]
    }
}();

export default dropMenuOption;