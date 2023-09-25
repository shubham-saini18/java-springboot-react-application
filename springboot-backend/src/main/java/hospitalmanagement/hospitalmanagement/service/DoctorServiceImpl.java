package hospitalmanagement.hospitalmanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import hospitalmanagement.hospitalmanagement.data.DoctorData;
import hospitalmanagement.hospitalmanagement.entity.Doctor;
import hospitalmanagement.hospitalmanagement.exception.ResourceNotFound;

@Service
public class DoctorServiceImpl implements DoctorService{
    @Autowired
    private DoctorData data;
	@Override
	public List<Doctor> getDoctor() {
//		List<Doctor> doctors = data.findAll(Sort.by(Sort.Direction.DESC, "salary").and(Sort.by(Sort.Direction.ASC , "name")));
		List<Doctor> doctors = data.findAll();
		return doctors;
	}
	
	@Override
	public void getDoctorData(int id) {
		data.findById(id);
		}
	@Override
	public String addNewDoctor(Doctor doctor) {
		Doctor existingDoctor = data.findById(doctor.getId()).orElse(null);
		if(existingDoctor ==null) {
		 data.save(doctor);
		 return "New Doctor added successfully";
		}
		else {
			return "Doctor Already Exists in Database";
		}
	}
	@Override
	public Doctor updateDoctor(Doctor doctor, int id) {
		Doctor existingDoctor = data.findById(id).orElseThrow(
				() -> new ResourceNotFound("Doctor", "Id", id));
		existingDoctor.setName(doctor.getName());
		existingDoctor.setSalary(doctor.getSalary());
		existingDoctor.setSpecialist(doctor.getSpecialist());
		data.save(existingDoctor);
		return existingDoctor;
	}
	@Override
	public void deleteDoctor(int id) {
		data.findById(id).orElseThrow(() -> new ResourceNotFound("Doctor", "Id", id));
		data.deleteById(id);
		
	}
	

}
