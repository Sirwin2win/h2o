import axios from 'axios'

const API_URL = 'https://api.buywaterh2o.com/api/products'

// Create new contribution
const createContribution = async (productData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, contributionData, config)

  return response.data
}

// Get user contributions
const getContributions = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user contribution
const deleteContribution = async (contributionId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + contributionId, config)

  return response.data
}

const contributionService = {
  createContribution,
  getContributions,
  deleteContribution,
}

export default contributionService