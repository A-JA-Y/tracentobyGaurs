import API from "./api";

/**
 * NOTE: "/godrejgolf/submit-lead" is the live lead-capture endpoint on
 * api.jaypeegreen.com and is intentionally left unchanged — the backend routes on
 * the `site` field below, not on the path. Renaming the path here would silently
 * break lead submission. Change it only once the API exposes a new route.
 */
const submitForm = async ({ data }) => {
  try {

    const response = await API.post("/godrejgolf/submit-lead", {...data, site: "tracentobygaurs"});

    
    console.log("Form submitted successfully:", response);

    return response;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error; 
  }
};

export default submitForm;