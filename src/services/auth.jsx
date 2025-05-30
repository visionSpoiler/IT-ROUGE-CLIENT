import { apiClient } from ".";
import { HTTPError } from 'ky';

export const signUp = async (form, code) => {
  try {
    const response = await apiClient.post(`auth/signup?code=${code}`, { json: form }).json();
    return response.data;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorBody = await error.response.json();
      throw errorBody;
    }
    throw error;
  }
}

export const checkSignUpCodeValidity = async (code) => {
  try {
    const response = await apiClient.get(`auth/check-signUp-code-validity?code=${code}`).json();
    if (!response.valid) {
      throw new Error(response.message || "유효하지 않은 코드입니다.");
    }
    return response;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export const checkIdDuplication = async (userId) => {
  try {
    const response = await apiClient.get(`auth/check-id-availability?userId=${userId}`).json();
    return response;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export const sendVerificationEmail = async (email) => {
  try {
    const response = await apiClient.post("auth/send-verification-email", { json: { email } }).json();
    return response;
  } catch (error) {
    throw error.response?.data || error;
  }
}

export const login = async (code) => {
    try {
    const result = await apiClient.get(`auth/login?code=${code}`).json();
    return result
  } catch (error) {
    throw error.response?.data || error;
  }
}