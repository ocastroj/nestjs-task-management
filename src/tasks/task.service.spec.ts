import { Test } from '@nestjs/testing';
import { TasksRepository } from './task.repository';
import { TasksService } from './tasks.service';

const mockTasksRepository = () = ({
  getTasks: jest.fn(),
});

describe('TaskService', () => {
  let tasksService: TasksService;
  let tasksRepository: TasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TasksService, { provide: TasksRepository, useFactory: mockTasksRepository},],
      
  //  });
  }).compile();

  tasksService = module.get(TasksService);
  tasksRepository = module.get(TasksRepository)

  });

  describe('getTasks', ()=>{
    it('calls TaskRepository.getTasks and returns result', () => {
        expect(tasksRepository.getTasks.not.toHaveBeenCalled();)
    });
  });
});
