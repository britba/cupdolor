
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the model to create the pre-approved config for.
   */
  // const parent = 'abc123'
  /**
   *  Required. The ID to use for the pre-approved config, which becomes the final
   *  component of the pre-approved config's resource name.
   *  This value should be 1-63 characters, and valid characters
   *  are /[a-z][0-9]-/.
   */
  // const preapprovalId = 'abc123'
  /**
   *  Required. The pre-approved config to create.
   */
  // const preapprovalConfig = {}

  // Imports the Ethos library
  const {EthosServiceClient} = require('@google-cloud/ethos').v1;

  // Instantiates a client
  const ethosClient = new EthosServiceClient();

  async function callPreapprove() {
    // Construct request
    const request = {
      parent,
      preapprovalId,
      preapprovalConfig,
    };

    // Run request
    const [operation] = await ethosClient.preapprove(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callPreapprove();


