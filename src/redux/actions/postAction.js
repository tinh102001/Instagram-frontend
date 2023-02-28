import { postAPI } from "../../utils/fetchAPI";
import { imageUpload } from "../../utils/imagesUpload";

export const POST_TYPES = {
  CREATE_POST: "CREATE_POST",
};

export const createPost =
  ({ content, images, auth }) =>
  async (dispatch) => {
    let media = [];
    try {
      if (images.length > 0) media = await imageUpload(images);

      const res = await postAPI(
        "posts",
        { content, images: media },
        auth.token
      );

      dispatch({
        type: POST_TYPES.CREATE_POST,
        payload: { ...res.data.newPost, user: auth.user },
      });
    } catch (error) {
      console.log(error);
    }
  };
