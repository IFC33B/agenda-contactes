package ifc33b.dwesc.agenda_contactes.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/contactes")
public class ContacteController {
    @GetMapping("/{nom}") // Devolver un contacto por su nombre
    public int getContacte() {
        return 0;
    }
    
    @PostMapping() // Crear un contacto
    public int createContacte() {
        return 0;
    }
}