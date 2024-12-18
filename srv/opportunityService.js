const cds = require('@sap/cds');
const axios = require('axios');

module.exports = cds.service.impl(async function () {
    this.on('calculateRevenue', async (req) => {
        const currentImage  = req.data.currentImage; // Extract payload data
        const beforeImage = req.data.beforeImage;
        console.log('Payload currentImage received:', JSON.stringify(currentImage));

        // Define default or calculated value for expectedRevenueAmount
        const defaultExpectedRevenueAmount = {
            content: 100 *2, // Example calculation
            currencyCode: "USD"
        };
        if (!beforeImage.expectedRevenueAmount 
            || !beforeImage.expectedRevenueAmount.content 
            || beforeImage.expectedRevenueAmount.content === 0 )
        {
            // update expectedRevenueAmount
            if (!currentImage.expectedRevenueAmount) {
                currentImage.expectedRevenueAmount = defaultExpectedRevenueAmount;
            }else{
                currentImage.expectedRevenueAmount = defaultExpectedRevenueAmount;
            }

        }
       
        //send response
        const response=  {
            "data":currentImage,
            "noChanges": false
         }
         console.log('Payload Response:', response);
         return response;  // This is the key part to ensure response format
    });
});
