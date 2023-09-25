package hospitalmanagement.hospitalmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hospitalmanagement.hospitalmanagement.entity.Doctor;
import hospitalmanagement.hospitalmanagement.service.DoctorService;

@RestController
@RequestMapping("/api/doctor")
@CrossOrigin
public class DoctorController {
	@Autowired
	private DoctorService ds;

	@GetMapping("/all")
	public List<Doctor> getAllDoctor() {
		return ds.getDoctor();
	}
	 
	@GetMapping("/{id}")
	public ResponseEntity<HttpStatus> getDoctorData(@PathVariable int id)
	{
		try 
		{
			   this.ds.getDoctorData(id);
			   return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e) {
			   return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/add")
	public String addDoctor(@RequestBody Doctor doctor) {
		return this.ds.addNewDoctor(doctor);
	}
	@PutMapping("/updatedoctor/{id}")
	public ResponseEntity<Doctor> updateDoctor(@PathVariable int id ,@RequestBody Doctor doctor){
		return new ResponseEntity<Doctor>(ds.updateDoctor(doctor, id),HttpStatus.OK);
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteDoctor(@PathVariable int id){
		ds.deleteDoctor(id);
		return new ResponseEntity<String>("Doctor Deleted Successfully!!.." , HttpStatus.OK);
	}
}
