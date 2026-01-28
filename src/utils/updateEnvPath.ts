const updateEnvPath = (filename: string) => {
  const isProd = process.env.NODE_ENV === 'production';
  const prefixPath = isProd ? '/repository-name' : '';

  return prefixPath + filename;
};

export default updateEnvPath;
