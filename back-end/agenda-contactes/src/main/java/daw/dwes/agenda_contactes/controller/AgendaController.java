package daw.dwes.agenda_contactes.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/contactes")
public class AgendaController {

    @PostMapping
    public int crearContacte() {
        return 0;
    }

    @GetMapping
    public int getContactes() {
        return 0;
    }
    
}