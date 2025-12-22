package ifc33b.dwesc.agenda_contactes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import ifc33b.dwesc.agenda_contactes.dto.ContacteRequest;
import ifc33b.dwesc.agenda_contactes.dto.ContacteResponse;
import ifc33b.dwesc.agenda_contactes.service.ContacteService;




@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/contactes")
public class ContacteController {
    @Autowired
    ContacteService contacteService;

    @GetMapping("/{nom}") // Devolver un contacto por su nombre
    public ResponseEntity<List<ContacteResponse>> getContacte(@RequestBody ContacteRequest contacteRequest, @PathVariable String nom) {
        // Service
        List<ContacteResponse> contactes = contacteService.getContacte(contacteRequest);

        // HTTP response
        return ResponseEntity.ok(contactes);
    }
    
    @PostMapping() // Crear un contacto
    public int createContacte() {
        return 0;
    }
}