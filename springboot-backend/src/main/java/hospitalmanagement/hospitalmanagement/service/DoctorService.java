package hospitalmanagement.hospitalmanagement.service;

import java.util.List;

import hospitalmanagement.hospitalmanagement.entity.Doctor;

public interface DoctorService {
  public List<Doctor> getDoctor();
  public String addNewDoctor(Doctor doctor);
  public Doctor updateDoctor(Doctor doctor , int id);
  public void deleteDoctor(int id);
  public void getDoctorData(int id);
}
