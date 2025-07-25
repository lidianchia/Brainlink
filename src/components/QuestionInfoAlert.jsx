import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import "remixicon/fonts/remixicon.css";
import { FormattedMessage } from "react-intl";

function QuestionInfoAlert({ content, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md w-full mx-4">
        <DialogHeader>
          <DialogTitle>
            <FormattedMessage id="QuestionInfoAlert.title" />
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {content}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button className="px-10 py-2">
              <FormattedMessage id="QuestionInfoAlert.confirm" />
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default QuestionInfoAlert;
