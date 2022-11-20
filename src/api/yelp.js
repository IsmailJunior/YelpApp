import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer iMb4voKACmJvWBGls5JsE6iOMtuQZoMfwNlF4P8Sfaj3t0ftSWrmfl0FThzTVI4jpUAnni1ek-kSYpuYl3DQGQdEA9PdfD5octSi74ehZ9b6yA97LM-5QLpqKnx6Y3Yx",
  },
});
