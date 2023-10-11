/**
 * Vue Mixins  
 * Author: Vrijraj Singh
 * ES6 Module
*/

export default {
    methods: {
        /**
         * @description Check Existance for the Social Media Links
         * @param {String} link - Link URL 
         * @param {Number} size - Size / Default value of the link 0
         * @returns {Boolean} true/False
        */
        checkExistance: (link, size) => (link && link.length > size),

        /**
         * @description get all sorted data by Name (property)
         * @param {Array} data - Array of JSON 
         * @returns {Array} Sorted Array of JSON
        */
        sortByName: (data) => data.sort((a, b) => {
            return (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : 1;
        }),

        /**
         * @description Get 2 Char of From the String for Thumbnail
         * @param {String} data - String
         * @returns {String} String 
        */
        getCharString: (data) => {
            var splitArr = data.split(" ");
            if (splitArr.length > 1) {
                return (
                    splitArr[0].substring(0, 1) +
                    "" +
                    splitArr[1].substring(0, 1)
                ).toUpperCase();
            } else {
                return splitArr[0].substring(0, 1).toUpperCase();
            }
        },

        /**
         * @description Get Partner Image URL from Assets Dir
         * @param {String} pic - file name
         * @returns {URL} url of the Image
        */
        getPartnerImgUrl(pic, defaultimage = "maleAvatar.jpg") {
            if (pic.length > 0) {
                return require('@/assets/img/partners/' + pic)
            } else {
                return require('@/assets/img/common/' + defaultimage);
            }
        },

        /**
         * @description Get Genral Image URL from Assets Dir
         * @param {String} pic - file name
         * @returns {String} URL of the Image
        */
        getImgUrl(pic, defaultimage = "maleAvatar.jpg") {
            if (pic.length > 0) {
                return require('@/assets/img/speakers/' + pic)
            } else {
                return require('@/assets/img/common/' + defaultimage);
            }
        },

        /**
         * @description Get Team Image URL from Assets Dir
         * @param {String} pic - file name
         * @returns {String} URL of the Image
        */
        getTeamImgUrl(pic, defaultimage = "maleAvatar.jpg") {
            if (pic.length > 0) {
                return require('@/assets/img/team/' + pic)
            } else {
                return require('@/assets/img/common/' + defaultimage);
            }
        }
    },
}
