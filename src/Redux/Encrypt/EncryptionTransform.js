import { createTransform } from 'redux-persist';
import CryptoJS from 'crypto-js';

const encryptionKey = '3sxcbdaskjxaskxdj3135454sxasxkjashca4312e2d5df6195sxcdsxcds4202sfhj v15f9cb6c1802556320dfbe4aa3a3494c5fa441sbxcdnsxcbskjcns512dvdvghyuop7^$h*93e7fab6fbfgyjfvddvefc5cc545f9256e5996915c85717d7ff3df5336249fca44edf7a1015cscbschbskjc5755f800e88d957dvbyhnbfd74e479a15bf263fa679f9994b19b9e5a33264835e93dad0f5bbaf1b';

// Encryption function
const encryptTransform = createTransform(
  (inboundState, key) => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(inboundState), encryptionKey).toString();
    return encryptedData;
  },
  (outboundState, key) => {
    const bytes = CryptoJS.AES.decrypt(outboundState, encryptionKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  }
);

export { encryptTransform };
