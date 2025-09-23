import axios from 'axios'

const API_URL = 'https://api.buywaterh2o.com/api/category/'

// Create new complaint
const createCategory = async (categorytData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, categorytData, config)

  return response.data
}

// Get user complaints
const getCategories = async (token) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }

  const response = await axios.get(API_URL)

  return response.data
}

// Delete user complaint
const deleteCategory = async (categoryId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + categoryId, config)

  return response.data
}

const categoryService = {
  createCategory,
  getCategories,
  deleteCategory,
}

export default categoryService
