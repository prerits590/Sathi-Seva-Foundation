import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../libs/firebase";

export const handleFileChangeMethod = async (file, folder) => {
  try {
    if (!file) {
      return;
    }

    const storageRef = ref(storage, `${folder}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload progress:", progress);
    });

    await uploadTask;

    const downloadURL = await getDownloadURL(storageRef);

    return { success: true, data: downloadURL };
  } catch (error) {
    console.error("Error uploading file:", error);
    return { success: false, error: error.message || "Unknown error" };
  }
};
