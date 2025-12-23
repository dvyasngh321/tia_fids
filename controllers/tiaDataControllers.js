const axios = require("axios");

const tiaArrivalData = async (req, res) => {
  try {
    const response = await axios.get(
      "http://182.93.77.10:81/PADS4/FIDS/Database/Flights/NetDisplaySystems.FIDS.SDK.OperationalView?$format=json"
    );

    const arrivalData = response.data.value.filter(
      (item) => item.FlightType === "Arrival" && item.IsInternational === true
    );

    return res.status(200).json({
      data: arrivalData,
      message: "Data Fetched successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const tiaDepartureData = async (req, res) => {
  try {
    const response = await axios.get(
      "http://182.93.77.10:81/PADS4/FIDS/Database/Flights/NetDisplaySystems.FIDS.SDK.OperationalView?$format=json"
    );

    const departureData = response.data.value.filter(
      (item) => item.FlightType === "Departure" && item.IsInternational === true
    );

    return res.status(200).json({
      data: departureData,
      message: "Data Fetched successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const tiaDomDepartureData = async (req, res) => {
  try {
    const response = await axios.get(
      "http://182.93.77.10:81/PADS4/FIDS/Database/Flights/NetDisplaySystems.FIDS.SDK.OperationalView?$format=json"
    );

    const departureData = response.data.value.filter(
      (item) =>
        item.FlightType === "Departure" && item.IsInternational === false
    );

    return res.status(200).json({
      data: departureData,
      message: "Data Fetched successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

const tiaDomArrivalData = async (req, res) => {
  try {
    const response = await axios.get(
      "http://182.93.77.10:81/PADS4/FIDS/Database/Flights/NetDisplaySystems.FIDS.SDK.OperationalView?$format=json"
    );

    const arrivalData = response.data.value.filter(
      (item) => item.FlightType === "Arrival" && item.IsInternational === false
    );

    return res.status(200).json({
      data: arrivalData,
      message: "Data Fetched successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  tiaArrivalData,
  tiaDepartureData,
  tiaDomDepartureData,
  tiaDomArrivalData,
};
