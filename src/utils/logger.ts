export const logProgress = (message: string) => {
  console.log(`⌛ ${message}`);
};

export const logSuccess = (message: string) => {
  console.log(`🎉 ${message}`);
};

export const logError = (message: string) => {
  console.error(`❗️ ${message}`);
};
